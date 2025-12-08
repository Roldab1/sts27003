Energy — Synergy: Affordable and Clean Energy

A multi-page educational website about Synergy (UN SDG #7). This site is designed to inform about clean energy and inspire action.

Files

- `index.html` — landing page (opens automatically)
- `about.html` — deep dive into energy and Synergy
- `sources.html` — renewable, nonrenewable, and emerging energy technologies
- `tips.html` — practical ways to save energy and reduce carbon footprint
- `contact.html` — contact form and resources
- `styles.css` — all site styling and layout
- `script.js` — navigation and form handling
- `assets/` — place images, videos, and other resources here

Viewing the Site

1. Open `index.html` in your browser (double-click or right-click → Open With).
2. Or run a local HTTP server from PowerShell:

```powershell
cd "c:\Users\sensu\OneDrive\Desktop\STS Project"
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

Adding a Video Background

The homepage has a video background placeholder. To add your own looped video:

1. Prepare a video file (MP4 recommended for best browser support):
   - File format: MP4 (H.264 codec) or WebM
   - Duration: 10–30 seconds (loop will repeat)
   - Dimensions: 16:9 aspect ratio recommended
   - Size: Keep under 10 MB for fast loading

2. Place your video files in the `assets/` folder:
   - `assets/energy-bg.mp4` (main format)
   - `assets/energy-bg.webm` (optional backup for older browsers)

3. The video will automatically play on the homepage hero section.

Free Tools for Creating/Converting Videos

- OBS Studio: Record your own video
- FFmpeg: Convert or compress videos
- Online converters: cloudconvert.com, zamzar.com

Customizing

- Edit any `.html` file to change content
- Modify `styles.css` for colors, fonts, spacing
- Add images to `assets/` and reference them in HTML
- Update text and links as needed for your context

Resources

- UN SDG #7: https://sdgs.un.org/goals/goal7
- IRENA: https://www.irena.org
- IEA: https://www.iea.org

This site was created as an educational project for Synergy (UN SDG #7).
