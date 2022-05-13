<template>
  <footer className="footer">
      <div className="creator">Created by Lansyfonseka</div>
      <div className="copyright">&copy; 2022 ManBook</div>
      <div className="communicate">
        <a href='https://github.com/Lansyfonseka' className="link__github">
          <img src="../../icons/github-logo-light.svg" alt="github" />
        </a>
        <a href='https://telegram.me/lansyfonseka' className="link__telegram">
          <img src="../../icons/telegram-logo.svg" alt="github" />
        </a>
        <a href='https://www.linkedin.com/in/lansyfonseka/' className="link__linkedin">
          <img src="../../icons/linkedin-logo.svg" alt="github" />
        </a>
      </div>
    </footer>
</template>

<script>
import './Footer.scss'
export default {
  name: "CustomFooter"
}
</script>
