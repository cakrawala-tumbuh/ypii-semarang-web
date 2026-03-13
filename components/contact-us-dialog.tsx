'use client'

import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

type ContactUsDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactUsDialog({
  open,
  onOpenChange,
}: ContactUsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[90vh] overflow-y-auto border-none bg-transparent p-0 shadow-none sm:max-w-4xl"
      >
        <div className="overflow-hidden rounded-2xl bg-background">
          <Image
            src="/images/contact-header.svg"
            alt="Dekorasi header contact"
            width={1118}
            height={385}
            className="block h-auto w-full"
            priority
          />

          <div className="px-5 pb-6 pt-5 md:px-8 md:pt-7">
            <p className="text-sm text-muted-foreground md:text-base">
              Isi data berikut untuk pendaftaran PPDB. Tim kami akan
              menghubungi Anda maksimal dalam 1x24 jam.
            </p>

            <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <div className="md:col-span-2">
                <label htmlFor="nama-anak" className="mb-2 block text-sm font-medium">
                  Nama Anak
                </label>
                <Input id="nama-anak" name="nama_anak" required />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="tanggal-lahir-anak" className="mb-2 block text-sm font-medium">
                  Tanggal Lahir Anak
                </label>
                <Input id="tanggal-lahir-anak" name="tanggal_lahir_anak" type="date" required />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="unit-dituju" className="mb-2 block text-sm font-medium">
                  Unit yang dituju
                </label>
                <select
                  id="unit-dituju"
                  name="unit_dituju"
                  required
                  defaultValue=""
                  className="border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border px-3 text-sm outline-none focus-visible:ring-[3px]"
                >
                  <option value="" disabled>
                    Pilih unit
                  </option>
                  <option value="KB-TK Cor Yesu">KB-TK Cor Yesu</option>
                  <option value="KB-TK Kebon Dalem">KB-TK Kebon Dalem</option>
                  <option value="KB-TK Kebon Dalem 2">KB-TK Kebon Dalem 2</option>
                  <option value="SD Cahaya Nur">SD Cahaya Nur</option>
                  <option value="SD Kebon Dalem">SD Kebon Dalem</option>
                  <option value="SD Kebon Dalem 2">SD Kebon Dalem 2</option>
                  <option value="SD Maria Bintang Laut">SD Maria Bintang Laut</option>
                  <option value="SD Pangudi Utami">SD Pangudi Utami</option>
                  <option value="SMA Kebon Dalem">SMA Kebon Dalem</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="nama-orang-tua" className="mb-2 block text-sm font-medium">
                  Nama Orang Tua Calon Siswa
                </label>
                <Input id="nama-orang-tua" name="nama_orang_tua_calon_siswa" required />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="wa-orang-tua" className="mb-2 block text-sm font-medium">
                  No. WA Orang Tua Siswa
                </label>
                <Input
                  id="wa-orang-tua"
                  name="wa_orang_tua_siswa"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  pattern="[0-9]{10,15}"
                  minLength={10}
                  maxLength={15}
                  placeholder="Contoh: 081234567890"
                  title="Masukkan nomor handphone 10-15 digit tanpa spasi atau simbol"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
                  }}
                  required
                />
              </div>

              <Button
                type="submit"
                className="h-11 rounded-full bg-oxblood text-primary-foreground hover:bg-oxblood/90 md:col-span-2"
              >
                KIRIM PENDAFTARAN
              </Button>
            </form>
          </div>

          <Image
            src="/images/contact-footer.svg"
            alt="Dekorasi footer contact"
            width={1118}
            height={385}
            className="h-auto w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}