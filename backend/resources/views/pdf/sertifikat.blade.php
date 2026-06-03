<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Sertifikat Magang</title>
    <style>
    @page {
        margin: 40px;
    }

    body {
        font-family: DejaVu Sans, sans-serif;
        color: #111c2d;
        background: #ffffff;
    }

    .certificate {
        border: 6px solid #003e6f;
        padding: 40px;
        height: 550px;
        position: relative;
    }

    .inner-border {
        border: 2px solid #a1c9ff;
        height: 100%;
        padding: 32px;
        text-align: center;
        position: relative;
    }

    .brand {
        color: #003e6f;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 24px;
    }

    .title {
        font-size: 36px;
        font-weight: bold;
        color: #003e6f;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    .subtitle {
        font-size: 16px;
        color: #5c5f60;
        margin-bottom: 36px;
    }

    .given {
        font-size: 14px;
        color: #414750;
        margin-bottom: 12px;
    }

    .name {
        font-size: 30px;
        font-weight: bold;
        color: #111c2d;
        margin-bottom: 12px;
    }

    .description {
        width: 85%;
        margin: 0 auto;
        font-size: 14px;
        line-height: 1.8;
        color: #414750;
    }

    .program {
        margin-top: 24px;
        font-size: 15px;
        font-weight: bold;
        color: #003e6f;
    }

    .meta {
        margin-top: 32px;
        font-size: 12px;
        color: #5c5f60;
    }

    .signature {
        position: absolute;
        bottom: 36px;
        right: 50px;
        text-align: center;
        font-size: 12px;
    }

    .signature-line {
        margin-top: 60px;
        border-top: 1px solid #111c2d;
        width: 180px;
        padding-top: 8px;
        font-weight: bold;
    }

    .watermark {
        position: absolute;
        top: 260px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 70px;
        color: #e7eeff;
        font-weight: bold;
        z-index: -1;
    }
    </style>
</head>

<body>
    <div class="certificate">
        <div class="inner-border">
            <div class="watermark">PT LEN</div>
            <div class="brand">PT LEN Industri</div>
            <div class="title">Sertifikat Magang</div>
            <div class="subtitle"> Certificate of Internship Completion </div>
            <div class="given"> Diberikan kepada: </div>
            <div class="name"> {{ $peserta->nama }} </div>
            <div class="description"> Telah menyelesaikan program magang di PT LEN Industri pada periode
                <strong>{{ $peserta->tanggal_mulai }}</strong> sampai dengan
                <strong>{{ $peserta->tanggal_selesai }}</strong>. Peserta telah memenuhi seluruh administrasi akhir
                program magang.
            </div>
            <div class="program"> {{ $peserta->program_studi ?? '-' }} - {{ $peserta->instansi }} </div>
            <div class="meta"> Nomor Sertifikat: <strong>{{ $sertifikat->nomor_sertifikat }}</strong> <br> Tanggal
                Terbit: {{ $sertifikat->tanggal_terbit }} </div>
            <div class="signature"> Bandung, {{ $sertifikat->tanggal_terbit }}
                <div class="signature-line"> Admin Magang </div>
            </div>
        </div>
    </div>
</body>

</html>