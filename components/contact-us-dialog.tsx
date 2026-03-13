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

              <fieldset className="md:col-span-2">
                <legend className="mb-2 block text-sm font-medium">Unit yang dituju</legend>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="unit_dituju" value="TK" required />
                    TK
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="unit_dituju" value="SD" required />
                    SD
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="unit_dituju" value="SMP" required />
                    SMP
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" name="unit_dituju" value="SMA" required />
                    SMA
                  </label>
                </div>
              </fieldset>

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
                <Input id="wa-orang-tua" name="wa_orang_tua_siswa" type="tel" required />
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