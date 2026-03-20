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
    return { status: 'error', message: 'Konfigurasi server tidak lengkap.' }
  }

  const body = new URLSearchParams()
  for (const [key, value] of formData.entries()) {
    body.append(key, value.toString())
  }

  let res: Response
  try {
    res = await fetch(`${apiUrl}/api/v1/custom/ypii/ppdb/contact?db=${apiDb}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${apiAuth}`,
        'DATABASE': apiDb,
      },
      body: body.toString(),
    })
  } catch {
    return { status: 'error', message: 'Tidak dapat terhubung ke server. Coba lagi nanti.' }
  }

  const json = await res.json()

  if (json.success === false) {
    return {
      status: 'validation_error',
      message: json.error ?? 'Validasi gagal.',
      missingFields: json.missing_fields ?? [],
    }
  }

  if (json.success === true) {
    return {
      status: 'success',
      message: json.message ?? 'Pendaftaran berhasil dikirim. Tim kami akan menghubungi Anda dalam 1x24 jam.',
    }
  }

  return { status: 'error', message: 'Terjadi kesalahan. Coba lagi nanti.' }
}
