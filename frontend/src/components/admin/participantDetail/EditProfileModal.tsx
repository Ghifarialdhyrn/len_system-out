"use client";

import { useState } from "react";
import { updatePeserta } from "@/services/pesertaService";
import { PesertaMagang } from "@/types/peserta";
import EditInput from "@/components/admin/participantDetail/EditInput";

type EditProfileModalProps = {
  peserta: PesertaMagang;
  onClose: () => void;
  onSuccess: (peserta: PesertaMagang) => void;
};

export default function EditProfileModal({
  peserta,
  onClose,
  onSuccess,
}: EditProfileModalProps) {
  const [form, setForm] = useState({
    no_peserta: peserta.no_peserta,
    nama: peserta.nama,
    email: peserta.email || "",
    no_hp: peserta.no_hp || "",
    instansi: peserta.instansi,
    program_studi: peserta.program_studi || "",
    tanggal_mulai: peserta.tanggal_mulai,
    tanggal_selesai: peserta.tanggal_selesai,
    status_magang: peserta.status_magang,
  });

  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setSaving(true);
      setErrorMessage("");

      const response = await updatePeserta(peserta.id, {
        ...form,
        email: form.email || null,
        no_hp: form.no_hp || null,
        program_studi: form.program_studi || null,
      });

      onSuccess(response.data);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Gagal memperbarui profil."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl border border-[#c1c7d2] shadow-xl overflow-hidden">
        <div className="bg-[#003e6f] text-white px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Edit Profile</h2>
            <p className="text-xs text-white/70">
              Perbarui data peserta magang.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMessage && (
            <div className="bg-[#ffdad6] text-[#93000a] px-4 py-3 rounded-xl text-sm font-semibold">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EditInput
              label="No Peserta"
              name="no_peserta"
              value={form.no_peserta}
              onChange={handleChange}
              required
            />

            <EditInput
              label="Nama"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
            />

            <EditInput
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <EditInput
              label="No HP"
              name="no_hp"
              value={form.no_hp}
              onChange={handleChange}
            />

            <EditInput
              label="Instansi"
              name="instansi"
              value={form.instansi}
              onChange={handleChange}
              required
            />

            <EditInput
              label="Program Studi"
              name="program_studi"
              value={form.program_studi}
              onChange={handleChange}
            />

            <EditInput
              label="Tanggal Mulai"
              name="tanggal_mulai"
              type="date"
              value={form.tanggal_mulai}
              onChange={handleChange}
              required
            />

            <EditInput
              label="Tanggal Selesai"
              name="tanggal_selesai"
              type="date"
              value={form.tanggal_selesai}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-xs font-semibold text-[#414750] mb-2">
                Status Magang
              </label>

              <select
                name="status_magang"
                value={form.status_magang}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#c1c7d2] rounded-xl text-sm focus:outline-none focus:border-[#003e6f]"
              >
                <option value="aktif">Aktif</option>
                <option value="selesai">Selesai</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[#c1c7d2]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-[#c1c7d2] text-xs font-semibold text-[#414750] hover:bg-[#f0f3ff]"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="px-5 py-3 rounded-xl bg-[#003e6f] text-white text-xs font-semibold hover:bg-[#005696] disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}