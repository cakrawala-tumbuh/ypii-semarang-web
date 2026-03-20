'use server'

export type ContactFormState = {
  status: 'idle' | 'success' | 'error' | 'validation_error'
  message: string
  missingFields?: string[]
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const apiUrl = process.env.ODOO_API_URL
  const apiDb = process.env.ODOO_API_DB
  const apiAuth = process.env.ODOO_API_AUTH

  if (!apiUrl || !apiDb || !apiAuth) {
    console.error('[contact] Env vars missing:', { apiUrl: !!apiUrl, apiDb: !!apiDb, apiAuth: !!apiAuth })
    return { status: 'error', message: 'Konfigurasi server tidak lengkap.' }
  }

  const body = new URLSearchParams()
  for (const [key, value] of formData.entries()) {
    body.append(key, value.toString())
  }

  const targetUrl = `${apiUrl}/api/v1/custom/ypii/ppdb/contact?db=${apiDb}`
  console.log('[contact] Fetching:', targetUrl)

  let res: Response
  try {
    res = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${apiAuth}`,
        'DATABASE': apiDb,
      },
      body: body.toString(),
    })
  } catch (err) {
    console.error('[contact] Fetch error:', err)
    return { status: 'error', message: 'Tidak dapat terhubung ke server. Coba lagi nanti.' }
  }

  console.log('[contact] Response status:', res.status)

  let json: Record<string, unknown>
  try {
    json = await res.json()
  } catch (err) {
    const text = await res.text().catch(() => '(unreadable)')
    console.error('[contact] Failed to parse JSON. Status:', res.status, 'Body:', text, 'Error:', err)
    return { status: 'error', message: 'Respons server tidak dapat dibaca.' }
  }

  console.log('[contact] Response body:', JSON.stringify(json))

  if (json.success === false) {
    return {
      status: 'validation_error',
      message: (json.error as string) ?? 'Validasi gagal.',
      missingFields: (json.missing_fields as string[]) ?? [],
    }
  }

  if (json.success === true) {
    return {
      status: 'success',
      message: (json.message as string) ?? 'Pendaftaran berhasil dikirim. Tim kami akan menghubungi Anda dalam 1x24 jam.',
    }
  }

  return { status: 'error', message: 'Terjadi kesalahan. Coba lagi nanti.' }
}
