const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Halaman utama portfolio
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description"
    content="Portfolio pribadi, profil, keahlian, dan karya saya.">

  <title>Portfolio | Nama Kamu</title>

  <style>
    :root {
      --bg: #ffffff;
      --surface: #f7f8fc;
      --text: #171923;
      --muted: #6b7280;
      --primary: #4f46e5;
      --border: #e8eaf0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 90px;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.7;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(1100px, 90%);
      margin: auto;
    }

    /* NAVIGASI */
    header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.94);
      border-bottom: 1px solid var(--border);
      backdrop-filter: blur(12px);
    }

    nav {
      min-height: 72px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -1px;
    }

    .logo span {
      color: var(--primary);
    }

    .nav-links {
      display: flex;
      gap: 26px;
      list-style: none;
      font-size: 0.92rem;
      color: var(--muted);
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    /* TOMBOL */
    .btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 12px 20px;
      border-radius: 10px;
      background: var(--primary);
      color: white;
      font-weight: 700;
      border: 1px solid var(--primary);
      transition: 0.2s;
    }

    .btn:hover {
      background: #3730a3;
      transform: translateY(-2px);
    }

    .btn-outline {
      background: white;
      color: var(--text);
      border-color: var(--border);
    }

    .btn-outline:hover {
      background: var(--surface);
      color: var(--primary);
    }

    /* HERO */
    .hero {
      min-height: 570px;
      display: flex;
      align-items: center;
      padding: 90px 0;
      background:
        radial-gradient(ellipse at 80% 30%, #eef0ff 0, transparent 45%),
        white;
    }

    .hero-content {
      max-width: 760px;
    }

    .eyebrow {
      display: inline-block;
      padding: 6px 12px;
      background: #eef0ff;
      color: var(--primary);
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 24px;
    }

    h1 {
      font-size: clamp(2.7rem, 7vw, 5rem);
      line-height: 1.08;
      letter-spacing: -3px;
      margin-bottom: 24px;
    }

    h1 span {
      color: var(--primary);
    }

    .hero p {
      color: var(--muted);
      max-width: 590px;
      font-size: 1.1rem;
      margin-bottom: 30px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    /* BAGIAN UMUM */
    section {
      padding: 90px 0;
    }

    .section-heading {
      margin-bottom: 36px;
    }

    .section-heading h2 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      letter-spacing: -1px;
      margin-bottom: 10px;
    }

    .section-heading p {
      color: var(--muted);
      max-width: 600px;
    }

    .about {
      background: var(--surface);
    }

    .about-box {
      background: white;
      padding: 30px;
      border: 1px solid var(--border);
      border-radius: 18px;
      max-width: 800px;
    }

    .about-box p {
      color: var(--muted);
      margin-bottom: 14px;
    }

    .about-box p:last-child {
      margin-bottom: 0;
    }

    /* KEAHLIAN */
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .skill {
      padding: 11px 17px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: white;
      font-weight: 600;
      font-size: 0.93rem;
    }

    /* PROYEK */
    .projects {
      background: var(--surface);
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .project-card {
      padding: 25px;
      background: white;
      border: 1px solid var(--border);
      border-radius: 16px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px #1719230c;
    }

    .project-icon {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      background: #eef0ff;
      color: var(--primary);
      border-radius: 12px;
      font-size: 1.35rem;
      margin-bottom: 20px;
    }

    .project-card h3 {
      margin-bottom: 10px;
    }

    .project-card p {
      color: var(--muted);
      font-size: 0.94rem;
      margin-bottom: 18px;
    }

    .project-link {
      color: var(--primary);
      font-weight: 700;
      font-size: 0.92rem;
    }

    /* KONTAK */
    .contact-box {
      padding: 45px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      text-align: center;
    }

    .contact-box h2 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      margin-bottom: 12px;
    }

    .contact-box p {
      color: var(--muted);
      margin-bottom: 25px;
    }

    footer {
      padding: 25px 0;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.9rem;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      gap: 15px;
      flex-wrap: wrap;
    }

    /* RESPONSIF UNTUK HP DAN TABLET */
    @media (max-width: 760px) {
      .nav-links {
        gap: 12px;
        font-size: 0.8rem;
      }

      .nav-contact {
        display: none;
      }

      .hero {
        min-height: auto;
        padding: 80px 0;
      }

      h1 {
        letter-spacing: -1.5px;
      }

      section {
        padding: 65px 0;
      }

      .project-grid {
        grid-template-columns: 1fr;
      }

      .contact-box {
        padding: 30px 20px;
      }
    }

    @media (max-width: 420px) {
      nav {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding: 14px 0;
        gap: 10px;
      }

      .nav-links {
        flex-wrap: wrap;
        gap: 14px;
      }

      .hero-actions .btn {
        width: 100%;
      }
    }
  </style>
</head>

<body>
  <header>
    <nav class="container">
      <a class="logo" href="#home">PORTO<span>.</span></a>

      <ul class="nav-links">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#about">Tentang</a></li>
        <li><a href="#skills">Skill</a></li>
        <li><a href="#projects">Proyek</a></li>
      </ul>

      <a class="btn nav-contact" href="#contact">Hubungi Saya</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <span class="eyebrow">Halo! Selamat datang di portfolio saya</span>

          <h1>Saya <span>Nama Kamu</span>,<br>
            calon developer web.</h1>

          <p>
            Saya sedang belajar membangun website yang modern,
            bermanfaat, dan mudah digunakan. Ini adalah tempat
            saya memperkenalkan diri dan menampilkan karya saya.
          </p>

          <div class="hero-actions">
            <a class="btn" href="#projects">Lihat Proyek &rarr;</a>
            <a class="btn btn-outline" href="#about">Kenali Saya</a>
          </div>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="container">
        <div class="section-heading">
          <h2>Tentang Saya</h2>
          <p>Mengenal saya lebih dekat.</p>
        </div>

        <div class="about-box">
          <p>
            Halo! Saya <strong>Nama Kamu</strong>. Saya tertarik
            pada teknologi, desain web, dan pengembangan aplikasi.
          </p>
          <p>
            Saat ini saya sedang mengembangkan kemampuan di bidang
            web development, mulai dari HTML dan CSS hingga
            JavaScript dan Node.js.
          </p>
          <p>
            Saya senang belajar hal baru dan mengubah ide menjadi
            proyek nyata yang bisa digunakan orang lain.
          </p>
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="container">
        <div class="section-heading">
          <h2>Keahlian Saya</h2>
          <p>Teknologi yang sedang saya pelajari dan gunakan.</p>
        </div>

        <div class="skills">
          <span class="skill">HTML</span>
          <span class="skill">CSS</span>
          <span class="skill">JavaScript</span>
          <span class="skill">Node.js</span>
          <span class="skill">Express.js</span>
          <span class="skill">Git</span>
        </div>
      </div>
    </section>

    <section class="projects" id="projects">
      <div class="container">
        <div class="section-heading">
          <h2>Proyek Pilihan</h2>
          <p>Beberapa contoh proyek yang bisa kamu ganti
            dengan karya milikmu sendiri.</p>
        </div>

        <div class="project-grid">
          <article class="project-card">
            <div class="project-icon">&#60;/&#62;</div>
            <h3>Website Portfolio</h3>
            <p>
              Website pribadi untuk memperkenalkan profil,
              keahlian, dan hasil karya saya.
            </p>
            <a class="project-link" href="#home">Proyek ini &uarr;</a>
          </article>

          <article class="project-card">
            <div class="project-icon">&#9881;</div>
            <h3>Aplikasi Sederhana</h3>
            <p>
              Contoh proyek aplikasi untuk melatih logika
              pemrograman dan interaksi pengguna.
            </p>
            <a class="project-link" href="#contact">Tanya lebih lanjut &rarr;</a>
          </article>

          <article class="project-card">
            <div class="project-icon">&#10022;</div>
            <h3>Proyek Berikutnya</h3>
            <p>
              Tempat untuk menampilkan proyek baru yang akan
              saya kerjakan dan kembangkan.
            </p>
            <a class="project-link" href="#contact">Hubungi saya &rarr;</a>
          </article>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <div class="contact-box">
          <h2>Mari Terhubung!</h2>
          <p>
            Punya ide, pertanyaan, atau ingin bekerja sama?
            Silakan kirim email kepada saya.
          </p>
          <a class="btn"
             href="mailto:emailkamu@example.com">
            Kirim Email &rarr;
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container footer-content">
      <span>&copy; <span id="year"></span> Nama Kamu</span>
      <span>Dibuat dengan Node.js & Express</span>
    </div>
  </footer>

  <script>
    document.getElementById("year").textContent =
      new Date().getFullYear();
  </script>
</body>
</html>`);
});

// Menjalankan server

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio berjalan pada port ${PORT}`);
});