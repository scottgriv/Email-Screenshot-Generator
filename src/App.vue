<template>
  <div
    class="app-container"
    :class="{ 'dark-mode': isDark, 'light-mode': !isDark }"
  >
    <!-- HEADER -->
    <div class="header-wrapper">
      <!-- Desktop Icons Left -->
      <div class="icon-col desktop-icons">
        <a class="icon-box" href="https://github.com/scottgriv/Email-Screenshot-Generator" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
                 <a
          class="icon-box"
          href="https://buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noopener"
        >
          <svg
            class="coffee-logo"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Buy Me A Coffee</title>
            <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
          </svg>
        </a>
      </div>

      <!-- Title Panel -->
      <div class="header-panel panel">
        <h1>Email Screenshot Generator</h1>
        <br>
        <p>Generate beautiful screenshots of your emails for presentations, documentation, or sharing. Upload EML files, preview styled emails, and export them as clean PNG images.<br><br>Compose on the left, preview on the right, then download a clean image of your email.</p>
      </div>

      <!-- Desktop Icons Right -->
      <div class="icon-col desktop-icons">
        <button class="icon-box" @click="toggleDark">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button class="icon-box" @click="copyLink">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>

      <!-- Mobile Icons Row -->
      <div class="icon-col mobile-icons">
        <a class="icon-box" href="https://github.com/scottgriv/Email-Screenshot-Generator" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
        <a
          class="icon-box"
          href="https://buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noopener"
        >
          <svg
            class="coffee-logo"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Buy Me A Coffee</title>
            <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
          </svg>
        </a>
        <button class="icon-box" @click="toggleDark">
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <button class="icon-box" @click="copyLink">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>
    </div>

    <!-- MAIN PANELS -->
    <div class="wrapper">
      <!-- Compose Panel -->
      <div class="panel editor-panel">
        <h2>Compose Email</h2>

        <!-- From/To/CC/BCC/Subject -->
        <div class="form-group" v-for="key in ['from','to','cc','bcc','subject']" :key="key">
          <label :for="key">{{ capitalize(key) }}:</label>
          <input
            :id="key"
            v-model="emailFields[key]"
            :placeholder="placeholders[key]"
            type="text"
          />
        </div>

        <!-- Body -->
        <div class="form-group">
          <label for="body">Body:</label>
          <textarea
            id="body"
            v-model="emailFields.body"
            placeholder="Type your email here..."
          ></textarea>
        </div>

        <!-- Font Picker -->
        <div class="form-group">
          <label for="fontFamily">Font:</label>
          <select id="fontFamily" v-model="selectedFont">
            <option value="Arial, sans-serif">Arial</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Inter, sans-serif">Inter</option>
            <option value="Roboto, sans-serif">Roboto</option>
            <option value="Lato, sans-serif">Lato</option>
            <option value="Merriweather, serif">Merriweather</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="Verdana, sans-serif">Verdana</option>
            <option value="Calibre, sans-serif">Calibre</option>
          </select>
        </div>

        <!-- Font Size -->
        <div class="form-group">
          <label for="fontSize">Size:</label>
          <input
            id="fontSize"
            type="number"
            v-model.number="selectedFontSize"
            min="10"
            max="24"
          />
        </div>

        <!-- Upload Image (hidden file input + styled label) -->
        <div class="form-group">
          <label class="upload-btn" for="upload">Upload Image</label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            @change="onFileChange"
            class="hidden-file-input"
          />
        </div>

        <!-- Upload EML (hidden file input + styled label) -->
<div class="form-group">
  <label class="upload-btn" for="emlUpload">Upload Email</label>
  <input
    id="emlUpload"
    type="file"
    accept=".eml"
    @change="onEmlUpload"
    class="hidden-file-input"
  />
</div>


        <button class="btn reset-btn" @click="resetFields">Reset Fields</button>
      </div>

      <!-- Preview Panel -->
      <div class="panel preview-panel" ref="previewRef" :style="previewStyles">
        <div class="email-header">
          <div class="avatar">
            <img v-if="uploadedImage" :src="uploadedImage" alt="Uploaded" />
            <i v-else class="fas fa-user-circle avatar-icon"></i>
          </div>
          <div class="header-rows">
            <div class="header-row">
              <span class="label">From:</span>
              <span class="value">{{ emailFields.from }}</span>
            </div>
            <div class="header-row">
              <span class="label">To:</span>
              <span class="value">{{ emailFields.to }}</span>
            </div>
            <div v-if="emailFields.cc" class="header-row">
              <span class="label">CC:</span>
              <span class="value">{{ emailFields.cc }}</span>
            </div>
            <div v-if="emailFields.bcc" class="header-row">
              <span class="label">BCC:</span>
              <span class="value">{{ emailFields.bcc }}</span>
            </div>
            <div class="header-row">
              <span class="label">Subject:</span>
              <span class="value">{{ emailFields.subject }}</span>
            </div>
          </div>
        </div>

        <hr />

        <div class="email-body-preview" v-html="emailFields.body"></div>
        <br>
        <button class="btn generate-btn" @click="generateImage">Generate Email Image</button>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="footer">Copyright &copy; {{ currentYear }} Scott Grivner</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import html2canvas from 'html2canvas'

const emailFields = ref({
  from: '', to: '', cc: '', bcc: '', subject: '', body: ''
})
const placeholders = {
  from: 'you@example.com',
  to: 'recipient@example.com',
  cc: 'cc@example.com',
  bcc: 'bcc@example.com',
  subject: 'Meeting update'
}
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

// Upload logic
const uploadedImage = ref(null)
function onFileChange(e) {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => { uploadedImage.value = reader.result }
  reader.readAsDataURL(file)
}

// Theme toggle & sync with <html>
const isDark = ref(false)
function toggleDark() {
  isDark.value = !isDark.value
}
onMounted(() => {
  document.documentElement.classList.add('light-mode')
})
watch(isDark, val => {
  document.documentElement.classList.toggle('dark-mode', val)
  document.documentElement.classList.toggle('light-mode', !val)
})

// Copy URL
const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  alert('Link copied!')
}

// Font settings
const selectedFont = ref('Arial, sans-serif')
const selectedFontSize = ref(14)
const previewStyles = computed(() => ({
  '--preview-font': selectedFont.value,
  '--preview-size': `${selectedFontSize.value}px`
}))

// Actions
const resetFields = () => {
  emailFields.value = { from: '', to: '', cc: '', bcc: '', subject: '', body: '' }
  uploadedImage.value = null
  selectedFont.value = 'Arial, sans-serif'
  selectedFontSize.value = 14
}

const previewRef = ref(null)
const generateImage = async () => {
  if (!previewRef.value) return
  const btn = previewRef.value.querySelector('.generate-btn')
  if (btn) btn.style.visibility = 'hidden'
const canvas = await html2canvas(previewRef.value, {
  backgroundColor: isDark.value ? '#2b2b2b' : '#ffffff',
  scale: window.devicePixelRatio * 2, // for extra sharpness
  useCORS: true
})

  if (btn) btn.style.visibility = ''
  const link = document.createElement('a')
  link.download = 'email_preview.png'
  link.href = canvas.toDataURL()
  link.click()
}

const currentYear = new Date().getFullYear()



import DOMPurify from 'dompurify'

// Helper: Decode quoted-printable strings (used in many email encodings)
function decodeQuotedPrintable(input) {
  const normalized = input.replace(/=(\r?\n|\n)/g, '')
  const byteString = normalized.replace(/=([A-Fa-f0-9]{2})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  )
  try {
    return new TextDecoder('utf-8').decode(
      new Uint8Array([...byteString].map(c => c.charCodeAt(0)))
    )
  } catch {
    return byteString
  }
}

// Helper: Replace image URLs with base64 blobs if accessible
async function inlineImages(html) {
  const imgTagRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/g;
  const imgUrls = [...html.matchAll(imgTagRegex)];

  for (const match of imgUrls) {
    const fullTag = match[0];
    const url = match[1];
    try {
      const response = await fetch(url, { mode: 'cors' });
      const blob = await response.blob();
      const base64 = await new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });

      // Replace original <img> tag with base64 inlined one + crossorigin
      const updatedTag = fullTag
        .replace(url, base64)
        .replace('<img', '<img crossorigin="anonymous"');

      html = html.replace(fullTag, updatedTag);
    } catch (err) {
      console.warn('Image inlining failed for', url, err);
    }
  }

  return html;
}

// Main EML parser
async function onEmlUpload(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = async () => {
    const raw = reader.result
    const lines = raw.split(/\r?\n/)

    // Parse headers
    const headers = {}
    let bodyStartIndex = 0
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.trim() === '') {
        bodyStartIndex = i + 1
        break
      }
      const [key, ...rest] = line.split(':')
      if (key && rest.length) {
        headers[key.toLowerCase()] = rest.join(':').trim()
      }
    }

    emailFields.value.from = headers['from'] || ''
    emailFields.value.to = headers['to'] || ''
    emailFields.value.cc = headers['cc'] || ''
    emailFields.value.bcc = headers['bcc'] || ''
    emailFields.value.subject = headers['subject'] || ''

    const contentType = headers['content-type'] || ''
    const boundaryMatch = contentType.match(/boundary="?([^"]+)"?/)
    const boundary = boundaryMatch ? boundaryMatch[1] : null

    let htmlBody = ''
    let plainBody = ''

    if (boundary) {
      const parts = raw.split(`--${boundary}`)
      for (const part of parts) {
        const lowerPart = part.toLowerCase()
        if (lowerPart.includes('content-type: text/html')) {
          const encoded = part.split(/\r?\n\r?\n/).slice(1).join('\n\n')
          htmlBody = decodeQuotedPrintable(encoded)
        } else if (lowerPart.includes('content-type: text/plain')) {
          const encoded = part.split(/\r?\n\r?\n/).slice(1).join('\n\n')
          plainBody = decodeQuotedPrintable(encoded)
        }
      }
    } else {
      const rawBody = lines.slice(bodyStartIndex).join('\n')
      plainBody = decodeQuotedPrintable(rawBody)
    }

    const sanitizerConfig = {
      ALLOWED_TAGS: [
        'b', 'i', 'em', 'strong', 'a', 'img', 'br', 'div', 'span', 'table',
        'tr', 'td', 'tbody', 'thead', 'ul', 'ol', 'li', 'p', 'hr'
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'style', 'width', 'height', 'class', 'target'],
      ALLOW_DATA_ATTR: false
    }

    if (htmlBody) {
      const inlined = await inlineImages(htmlBody);
      emailFields.value.body = DOMPurify.sanitize(inlined, sanitizerConfig);
    } else {
      emailFields.value.body = `<pre>${DOMPurify.sanitize(plainBody || '(No readable body found)')}</pre>`
    }
  }

  reader.readAsText(file)
}







</script>

<style scoped>
/* Fonts & icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

/* Theme variables */
.app-container.light-mode {
  --bg:#f0f0f0;--panel-bg:#fff;--text:#000;
  --input-bg:#fff;--input-text:#000;
  --btn-hover:#e2e8f0;--border:rgba(0,0,0,0.1);
  --shadow:0 2px 6px rgba(0,0,0,0.1);
}
.app-container.dark-mode {
  --bg:#121212;--panel-bg:#2b2b2b;--text:#e0e0e0;
  --input-bg:#3b3b3b;--input-text:#e0e0e0;
  --btn-hover:#4b4b4b;--border:rgba(255,255,255,0.1);
  --shadow:0 2px 6px rgba(0,0,0,0.5);
}

/* Container */
.app-container {
  min-height:100vh; width:100%;
  background:var(--bg); color:var(--text);
  font-family:Arial,sans-serif;
  display:flex; flex-direction:column; align-items:center;
  transition:background .3s,color .3s;
  padding:0; box-sizing:border-box;
}

/* Header */
.header-wrapper {
  display:flex; align-items:center; justify-content:space-between;
  width:100%; max-width:1120px;
  padding: 20px;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
}
.icon-col {
  display:flex; flex-direction:column; gap:10px;
}
.header-panel {
  flex:1; text-align:center;
  padding:20px;
  background:var(--panel-bg);
  border:1px solid var(--border);
  border-radius:10px;
  box-shadow:var(--shadow);
}
.header-panel h1 {
  margin:0 0 4px 0;
  font-size:24px; font-weight:600;
}
.header-panel p {
  margin:0; font-size:14px;
}
.icon-box {
  display:flex; align-items:center; justify-content:center;
  background:var(--panel-bg); color:var(--text);
  width:40px; height:40px;
  border:1px solid var(--border); border-radius:8px;
  font-size:18px; box-shadow:var(--shadow);
  cursor:pointer; transition:background .2s;
  text-decoration:none;
}
.icon-box:hover { background:var(--btn-hover) }
.coffee-logo { width:24px; height:24px }

/* Mobile Header */
.mobile-icons {
  display: none;
}
@media (max-width: 768px) {
  .desktop-icons {
    display: none;
  }
  .header-wrapper {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
  .header-panel {
    order: 1;
    width: 100%;
    padding: 20px;
  }
  .mobile-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 100%;
    order: 2;
  }
  .icon-col {
    flex-direction: row;
    justify-content: center;
  }
}

/* Panels Layout */
.wrapper {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 1120px;
  padding: 0 20px 20px;
  box-sizing: border-box;
}
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    padding: 0 20px 20px;
  }
  .panel {
    width: 100%;
    padding: 20px;
  }
}

/* Panel Base */
.panel {
  background:var(--panel-bg); border:1px solid var(--border);
  border-radius:10px; box-shadow:var(--shadow);
  padding:20px; display:flex; flex-direction:column;
  box-sizing:border-box; transition:background .3s,color .3s;
}

/* Compose Panel */
.editor-panel { flex:1; max-width:700px }
.editor-panel h2 { margin:0 0 15px; font-size:18px; font-weight:600 }
.form-group { display:flex; flex-direction:column; margin-bottom:15px }
.form-group label { font-size:14px; margin-bottom:5px }
.hidden-file-input { display:none }
.upload-btn {
  align-self:flex-start;
  background:var(--panel-bg); color:var(--text);
  border:1px solid var(--border); border-radius:6px;
  padding:6px 12px; font-size:13px; cursor:pointer;
  box-shadow:var(--shadow); transition:background .2s;
}
.upload-btn:hover { background:var(--btn-hover) }
.form-group input[type="text"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  background:var(--input-bg); color:var(--input-text);
  border:1px solid var(--border); border-radius:6px;
  padding:6px 8px; font-size:13px;
  transition:background .3s,color .3s,border .3s;
}
.form-group textarea {
  min-height: 120px;
  resize: vertical;
  font-family: Arial, sans-serif;
}

/* Preview Panel */
.preview-panel {
  flex:2; max-width:700px;
  font-family:var(--preview-font);
  font-size:var(--preview-size);
}
.email-header {
  display:flex; align-items:center; margin-bottom:10px;
}
.avatar {
  width:60px; height:60px;
  background:var(--input-bg);
  border:1px solid var(--border);
  border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  margin-right:10px;
  overflow:hidden;
}
.avatar img {
  width:100%; height:100%;
  object-fit:cover; border-radius:50%;
}
.avatar-icon {
  font-size:56px; color:var(--text);
}
.header-rows { display:flex; flex-direction:column }
.header-row { display:flex; margin-bottom:6px }
.label { width:70px; font-weight:bold }
.value { flex:1 }
.preview-panel hr {
  border:none; border-top:1px solid var(--border); margin:10px 0;
}

.email-body-preview {
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  flex: 1;
}

.dark-mode .coffee-logo {
  fill: white;
}

/* Buttons */
.btn {
  background:var(--panel-bg); color:var(--text);
  border:1px solid var(--border); border-radius:8px;
  padding:6px 12px; font-size:13px; cursor:pointer;
  box-shadow:var(--shadow); transition:background .2s;
  align-self:center;
}
.btn:hover { background:var(--btn-hover) }
.reset-btn {
  background:#e53e3e!important;
  border-color:#e53e3e!important;
  color:#fff!important;
}
.reset-btn:hover { background:#c53030!important }
.generate-btn {
  background:#3182ce!important;
  border-color:#3182ce!important;
  color:#fff!important;
}
.generate-btn:hover { background:#2b6cb0!important }

/* Footer */
.footer {
  text-align:center; font-size:13px;
  color:var(--text); margin-bottom:20px;
}
</style>

<!-- Global to cover full-page background -->
<style>
html.light-mode { --bg: #f0f0f0; }
html.dark-mode  { --bg: #121212; }

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: var(--bg) !important;
}
</style>

