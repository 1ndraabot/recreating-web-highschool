import { createClient } from '@/lib/supabase/server'

export default async function TestPage() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('instruments')
    .select('*')
    .limit(1)

  if (error) {
    return <p style={{ color: 'red' }}>Koneksi Gagal: {error.message}</p>
  }

  return (
    <p style={{ color: 'green' }}>
      Koneksi Berhasil! Baris dikembalikan: {data.length}
    </p>
  )
}