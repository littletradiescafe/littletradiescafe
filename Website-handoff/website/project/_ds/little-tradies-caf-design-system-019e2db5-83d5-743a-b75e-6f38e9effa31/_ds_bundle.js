/* @ds-bundle: {"format":3,"namespace":"LittleTradiesCafDesignSystem_019e2d","components":[],"sourceHashes":{"ui_kits/menu/MenuFooter.jsx":"55d4e97695b4","ui_kits/menu/MenuHeader.jsx":"9ac6e3998766","ui_kits/menu/MenuSection.jsx":"0510c8579726","ui_kits/menu/data.js":"1a42c430b2bb","ui_kits/menu/image-slot.js":"5ade9426e255","ui_kits/menu/tweaks-panel.jsx":"6591467622ed","ui_kits/website/ChalkboardBand.jsx":"05b49e89629c","ui_kits/website/FeatureChips.jsx":"aaa652be27c7","ui_kits/website/Footer.jsx":"6660f1e54a0d","ui_kits/website/HazardDivider.jsx":"7d5631b9299c","ui_kits/website/Hero.jsx":"6bcada69d85a","ui_kits/website/KidsMenuCard.jsx":"73944afaef53","ui_kits/website/LogoConcepts.jsx":"c6767bc3530d","ui_kits/website/Nav.jsx":"177f692fa0f0","ui_kits/website/WelcomeBlock.jsx":"eb2e56e2434a","ui_kits/website/data.js":"6431a0083e7b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LittleTradiesCafDesignSystem_019e2d = window.LittleTradiesCafDesignSystem_019e2d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/menu/MenuFooter.jsx
try { (() => {
/* global React */

function MenuFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "menu-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pill"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge"
  }, "GF"), /*#__PURE__*/React.createElement("div", null, "GF bread available ", /*#__PURE__*/React.createElement("strong", null, "+2"))), /*#__PURE__*/React.createElement("div", {
    className: "pill"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge orange"
  }, "\uD83C\uDF66"), /*#__PURE__*/React.createElement("div", null, "Add ice cream, cream", /*#__PURE__*/React.createElement("br", null), "or extra sauce ", /*#__PURE__*/React.createElement("strong", null, "+2"))), /*#__PURE__*/React.createElement("div", {
    className: "pill"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge navy"
  }, "\u2661"), /*#__PURE__*/React.createElement("div", null, "Please advise", /*#__PURE__*/React.createElement("br", null), "staff of allergies")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illust-toolbox.png",
    alt: ""
  }));
}
window.MenuFooter = MenuFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/MenuFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/MenuHeader.jsx
try { (() => {
/* global React */

function MenuHeader() {
  return /*#__PURE__*/React.createElement("header", {
    className: "menu-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-left"
  }, /*#__PURE__*/React.createElement("img", {
    className: "left",
    src: "../../assets/illust-truck.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cone",
    src: "../../assets/illust-helmet.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "title-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Little Tradies Caf\xE9"), /*#__PURE__*/React.createElement("div", {
    className: "menu-word"
  }, "MENU"), /*#__PURE__*/React.createElement("div", {
    className: "ribbon"
  }, "Built for play. Brewed for parents.")), /*#__PURE__*/React.createElement("div", {
    className: "head-right"
  }, /*#__PURE__*/React.createElement("img", {
    className: "right",
    src: "../../assets/illust-excavator.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "cone",
    src: "../../assets/illust-toolbox.png",
    alt: ""
  })));
}
window.MenuHeader = MenuHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/MenuHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/MenuSection.jsx
try { (() => {
/* global React */

function MenuRow({
  name,
  sub,
  price
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, name, sub && /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "(", sub, ")")), /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, price));
}
window.MenuRow = MenuRow;
function MenuSection({
  num,
  title,
  color = "teal",
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `section-card ${color}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, num), title), children);
}
window.MenuSection = MenuSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/MenuSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/data.js
try { (() => {
window.MENU_DATA = {
  hot: [{
    name: "Espresso",
    price: "4.0"
  }, {
    name: "Macchiato",
    price: "4.2"
  }, {
    name: "Piccolo",
    price: "4.5"
  }, {
    name: "Flat White / Latte / Cappuccino",
    price: "4.8"
  }, {
    name: "Long Black",
    price: "4.5"
  }, {
    name: "Mocha",
    price: "5.5"
  }, {
    name: "Hot Chocolate",
    price: "5.0"
  }, {
    name: "Chai Latte",
    price: "5.0"
  }, {
    name: "Tea",
    price: "4.5"
  }, {
    name: "Babyccino",
    price: "2.5"
  }],
  cold: [{
    name: "Iced Latte",
    price: "6.5"
  }, {
    name: "Iced Long Black",
    price: "5.5"
  }, {
    name: "Iced Coffee",
    price: "7.5"
  }, {
    name: "Iced Chocolate",
    price: "7.5"
  }, {
    name: "Milkshake",
    sub: "choc, strawberry, vanilla, caramel",
    price: "6.5"
  }, {
    name: "Thickshake",
    price: "8.0"
  }, {
    name: "Smoothie",
    price: "8.5"
  }, {
    name: "Juice",
    price: "5.5"
  }, {
    name: "Soft Drink",
    price: "4.5"
  }, {
    name: "Sparkling Water",
    price: "4.5"
  }],
  toastBase: [{
    name: "Adults: Thick-cut French Toast Stack",
    price: "10"
  }, {
    name: "Kids: Mini French Toast Stack",
    price: "5"
  }],
  sweet: [{
    name: "Nutella + roasted hazelnuts",
    price: "8"
  }, {
    name: "Strawberries + cream",
    price: "7"
  }, {
    name: "Blueberries + vanilla ice cream",
    price: "7"
  }, {
    name: "Apple crumble + cinnamon",
    price: "7"
  }, {
    name: "Banana + butterscotch",
    price: "7"
  }, {
    name: "Lemon curd + meringue",
    price: "7"
  }, {
    name: "Raspberry compote + white choc",
    price: "7"
  }, {
    name: "Chocolate + raspberry + toasted coconut",
    price: "8"
  }, {
    name: "Peanut butter + chocolate drizzle",
    price: "8"
  }, {
    name: "Maple + macadamia",
    price: "7"
  }],
  savoury: [{
    name: "Eggs your way",
    price: "4"
  }, {
    name: "Bacon + eggs",
    price: "7"
  }, {
    name: "Bacon + eggs + smoky sausage",
    price: "10"
  }, {
    name: "Pulled pork + smoky BBQ sauce",
    price: "9"
  }, {
    name: "Bacon + cheddar + chive",
    price: "8"
  }, {
    name: "Corn + kielbasa",
    price: "8"
  }, {
    name: "Prosciutto + apple + rocket",
    price: "9"
  }, {
    name: "Smoked salmon slice + cream cheese",
    price: "9"
  }, {
    name: "Brunch stack (egg, bacon, cheddar, chive)",
    price: "10"
  }],
  kids: [{
    name: "Crinkle Cut Chips",
    price: "5"
  }, {
    name: "Mini Pizza — Margherita",
    price: "8"
  }, {
    name: "Mini Pizza — Hawaiian",
    price: "8"
  }, {
    name: "Mini Pizza — Pepperoni",
    price: "8"
  }, {
    name: "Mini Pizza — BBQ Meatlovers",
    price: "8"
  }, {
    name: "Chips + Nuggets",
    price: "9"
  }, {
    name: "Chips + 3 Mini Sausage Rolls",
    price: "9"
  }, {
    name: "Chips + 3 Mini Pies",
    price: "9"
  }, {
    name: "Garlic + Herb Sub",
    price: "7"
  }, {
    name: "Nachos",
    price: "8"
  }, {
    name: "Potato Wedges",
    price: "7"
  }, {
    name: "Spiral Chips Truck",
    price: "6"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/data.js", error: String((e && e.message) || e) }); }

// ui_kits/menu/image-slot.js
try { (() => {
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <script src="image-slot.js"></script>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/menu/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ChalkboardBand.jsx
try { (() => {
/* global React */

function ChalkboardBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "chalk-band"
  }, /*#__PURE__*/React.createElement("img", {
    className: "left-img",
    src: "../../assets/illust-truck.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "right-img",
    src: "../../assets/illust-toolbox.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "chalk-stars"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      top: "18%",
      left: "12%",
      color: "#F4C542"
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      top: "70%",
      left: "28%",
      color: "#1F8A8A"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", {
    style: {
      top: "30%",
      right: "20%",
      color: "#E67E22"
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", {
    style: {
      bottom: "16%",
      right: "8%",
      color: "#F4C542"
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("div", {
    className: "slogan"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1F8A8A"
    }
  }, "BUILD."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#F4C542"
    }
  }, "PLAY."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E67E22"
    }
  }, "EAT."), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#FFFFFF"
    }
  }, "REPEAT!")), /*#__PURE__*/React.createElement("style", null, `
        .chalk-band {
          position: relative;
          background: #2b2b2b;
          background-image:
            radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 3px 3px, 7px 7px;
          background-position: 0 0, 1px 1px;
          padding: 48px 24px;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          min-height: 220px;
        }
        .left-img, .right-img {
          position: absolute; height: 130px; width: auto;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.4));
        }
        .left-img  { left: 24px;  top: 30%; transform: rotate(-3deg); }
        .right-img { right: 24px; top: 26%; transform: rotate(4deg); }
        .chalk-stars span {
          position: absolute;
          font-size: 16px;
          opacity: 0.7;
        }
        .slogan {
          font-family: var(--font-poster);
          font-size: clamp(40px, 6.5vw, 84px);
          line-height: 1.0;
          letter-spacing: 0.01em;
          text-align: center;
          text-shadow: 3px 3px 0 rgba(0,0,0,0.4);
          max-width: 880px;
        }
        @media (max-width: 720px) {
          .left-img, .right-img { height: 80px; opacity: 0.5; }
        }
      `));
}
window.ChalkboardBand = ChalkboardBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ChalkboardBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeatureChips.jsx
try { (() => {
/* global React */

function FeatureChips() {
  const {
    chips
  } = window.LT_DATA;
  return /*#__PURE__*/React.createElement("section", {
    className: "chips-row section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, chips.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    className: "chip",
    style: {
      background: c.color,
      color: c.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip-ico"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "chip-text"
  }, c.label)))), /*#__PURE__*/React.createElement("style", null, `
        .chips { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .chip {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          padding: 12px 20px;
          border-radius: 9999px;
          font-family: var(--font-display);
          font-size: 24px;
          letter-spacing: -0.01em;
          box-shadow: var(--shadow-md);
          transition: transform 200ms var(--ease-bounce);
        }
        .chip:hover { transform: translateY(-2px) rotate(-1deg); }
        .chip-ico {
          width: 44px; height: 44px; background: #fff;
          border-radius: 9999px;
          display: flex; align-items: center; justify-content: center;
          padding: 6px;
        }
        .chip-ico img { width: 100%; height: 100%; object-fit: contain; }
        @media (max-width: 720px) {
          .chips { grid-template-columns: repeat(2, 1fr); }
        }
      `));
}
window.FeatureChips = FeatureChips;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeatureChips.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */

function Footer() {
  const {
    contact
  } = window.LT_DATA;
  return /*#__PURE__*/React.createElement("footer", {
    className: "lt-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scallop",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    className: "container footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-main.png",
    alt: "Little Tradies Caf\xE9"
  }), /*#__PURE__*/React.createElement("p", {
    className: "ftag"
  }, "Built for play. Brewed for parents. ", /*#__PURE__*/React.createElement("span", {
    className: "heart"
  }, "\u2661"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Visit Us"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\uD83D\uDCCD"), " ", contact.visit.address1, /*#__PURE__*/React.createElement("br", null), "\xA0\xA0\xA0\xA0", contact.visit.address2), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\uD83D\uDD53"), " ", contact.visit.hours)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Get in Touch"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\uD83D\uDCDE"), " ", contact.reach.phone), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\u2709\uFE0F"), " ", contact.reach.email), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, "\uD83C\uDF10"), " ", contact.reach.web)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Follow Us"), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook",
    className: "soc f"
  }, "f"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram",
    className: "soc i"
  }, "\u25C9"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "TikTok",
    className: "soc t"
  }, "\u266A")), /*#__PURE__*/React.createElement("p", {
    className: "thanks"
  }, "Thanks for supporting", /*#__PURE__*/React.createElement("br", null), "local & family! ", /*#__PURE__*/React.createElement("span", {
    className: "heart"
  }, "\u2661")))), /*#__PURE__*/React.createElement("div", {
    className: "copybar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container copybar-row"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Little Tradies Caf\xE9  \xB7  Built for play. Brewed for parents."), /*#__PURE__*/React.createElement("span", {
    className: "links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy Policy"), "  |  ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms & Conditions")))), /*#__PURE__*/React.createElement("style", null, `
        .lt-footer {
          background: var(--color-navy);
          color: #fff;
          position: relative;
          margin-top: 28px;
        }
        .scallop {
          height: 28px;
          background-image: radial-gradient(circle at 14px 0, var(--color-cream) 14px, transparent 15px);
          background-size: 28px 28px;
          background-repeat: repeat-x;
          margin-top: -1px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr;
          gap: 32px;
          padding: 28px 28px 24px;
          align-items: start;
        }
        .brand-col img { width: 160px; height: auto; filter: brightness(1.03); margin-bottom: 10px; background: #fff; padding: 4px 8px; border-radius: 14px;}
        .ftag {
          font-family: var(--font-script); font-weight: 700;
          font-size: 22px; color: #fff; margin: 0;
        }
        .ftag .heart { color: var(--color-teal); }
        h4 {
          font-family: var(--font-display);
          font-size: 22px;
          margin: 4px 0 12px;
          color: #fff;
          font-weight: 400;
        }
        .lt-footer p {
          color: rgba(255,245,227,0.85);
          font-size: 14px; line-height: 1.5;
          margin: 0 0 10px;
          font-weight: 600;
        }
        .ico {
          display: inline-flex; width: 22px; height: 22px;
          margin-right: 6px;
          background: var(--color-teal);
          color: #fff;
          border-radius: 99px;
          font-size: 11px;
          align-items: center; justify-content: center;
          vertical-align: -5px;
        }
        .socials { display: flex; gap: 10px; margin-bottom: 12px; }
        .soc {
          width: 36px; height: 36px;
          background: #fff; color: var(--color-navy);
          border-radius: 99px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          font-weight: 900;
        }
        .soc.f { color: #1f73e0; }
        .soc.i {
          background: linear-gradient(45deg, #fda05c, #e6614c, #c33f8d);
          color: #fff;
        }
        .soc.t { color: #ee1d52; }
        .thanks {
          font-family: var(--font-script); font-weight: 700;
          font-size: 18px; color: #fff !important;
        }
        .thanks .heart { color: var(--color-teal); }
        .copybar {
          background: rgba(0,0,0,0.18);
          font-size: 12px;
          color: rgba(255,245,227,0.7);
          padding: 12px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .copybar-row { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
        .copybar a { color: inherit; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
      `));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HazardDivider.jsx
try { (() => {
/* global React */

function HazardDivider({
  height = 22,
  charcoal = false
}) {
  const stripe = charcoal ? "repeating-linear-gradient(135deg, #F4C542 0 18px, #3E4349 18px 36px)" : "repeating-linear-gradient(135deg, #F4C542 0 18px, #2F4E68 18px 36px)";
  return /*#__PURE__*/React.createElement("div", {
    className: "hazard",
    style: {
      height,
      background: stripe
    }
  }, /*#__PURE__*/React.createElement("style", null, `.hazard { width: 100%; }`));
}
window.HazardDivider = HazardDivider;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HazardDivider.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-kicker"
  }, /*#__PURE__*/React.createElement("span", {
    className: "star"
  }, "\u2605"), " Family Caf\xE9 \xB7 Construction Play \xB7 Real Coffee"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-lead"
  }, "A caf\xE9 where ", /*#__PURE__*/React.createElement("span", {
    className: "hl-teal"
  }, "little builders"), " play and", /*#__PURE__*/React.createElement("span", {
    className: "hl-orange"
  }, " parents recharge.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Dig, climb and imagine in our construction-themed play zone \u2014 while you relax with great coffee and feel-good food."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn primary"
  }, "Book a Table ", /*#__PURE__*/React.createElement("span", {
    className: "star"
  }, "\u2605")), /*#__PURE__*/React.createElement("button", {
    className: "btn outline"
  }, "View Kids Menu \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-art"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero-logo",
    src: "../../assets/logo-lockup-tagline.png",
    alt: "Little Tradies Caf\xE9 \u2014 Built for play. Brewed for parents."
  }))), /*#__PURE__*/React.createElement("style", null, `
        .hero { position: relative; padding: 40px 0 56px; overflow: hidden; }
        .hero-grid {
          display: grid; gap: 40px;
          grid-template-columns: 1.02fr 0.98fr;
          align-items: center;
        }
        .hero-kicker {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff;
          border: 1px solid var(--tint-navy-10);
          color: var(--color-accent);
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.04em;
          padding: 8px 16px;
          border-radius: 9999px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 20px;
        }
        .hero-kicker .star { color: var(--color-secondary); }
        .hero-lead {
          font-family: var(--font-heading);
          font-weight: 400;
          font-size: clamp(34px, 4.4vw, 60px);
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: var(--color-info);
          margin: 0 0 18px;
        }
        .hl-teal { color: var(--color-primary); }
        .hl-orange { color: var(--color-accent); }
        .hero-sub {
          font-size: var(--text-lg);
          line-height: 1.55;
          color: var(--fg-soft);
          max-width: 30em;
          margin: 0 0 28px;
        }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

        .hero-art {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          min-height: 420px;
        }
        .hero-logo {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: auto;
          filter: drop-shadow(0 14px 28px rgba(47,78,104,0.16));
          animation: hero-pop 600ms var(--ease-bounce) both;
        }
        @keyframes hero-pop {
          from { opacity: 0; transform: scale(0.94) rotate(-2deg); }
          to   { opacity: 1; transform: scale(1) rotate(0); }
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-art { min-height: 0; }
          .hero-logo { max-width: 360px; }
        }
      `));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KidsMenuCard.jsx
try { (() => {
/* global React */

function KidsMenuCard() {
  const {
    menuItems
  } = window.LT_DATA;
  return /*#__PURE__*/React.createElement("aside", {
    className: "kids-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board"
  }, /*#__PURE__*/React.createElement("div", {
    className: "board-header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "spark left"
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, "Kids Menu"), /*#__PURE__*/React.createElement("span", {
    className: "spark right"
  }, "\u2726")), /*#__PURE__*/React.createElement("div", {
    className: "rows"
  }, menuItems.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-ico"
  }, /*#__PURE__*/React.createElement("img", {
    src: it.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "row-name"
  }, it.name), /*#__PURE__*/React.createElement("div", {
    className: "row-line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "row-star",
    style: {
      color: it.star
    }
  }, "\u2605")))), /*#__PURE__*/React.createElement("div", {
    className: "board-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "heart"
  }, "\u2661"))), /*#__PURE__*/React.createElement("style", null, `
        .kids-menu {
          background: #fff;
          border: 3px solid var(--color-teal);
          border-radius: 28px;
          padding: 14px;
          box-shadow: var(--shadow-md);
          max-width: 360px;
        }
        .board { background: #fff; border-radius: 18px; padding: 10px 14px 4px; }
        .board-header {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: var(--color-teal);
          color: #fff;
          padding: 8px 18px;
          border-radius: 14px;
          margin: -28px auto 14px;
          width: fit-content;
          box-shadow: var(--shadow-sm);
        }
        .board-header .title {
          font-family: var(--font-display);
          font-size: 26px;
          letter-spacing: -0.01em;
        }
        .board-header .spark { color: var(--color-mustard); font-size: 14px; }
        .rows { display: flex; flex-direction: column; gap: 12px; }
        .row { display: grid; grid-template-columns: 48px 1fr auto auto; align-items: center; gap: 10px; }
        .row-ico { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; }
        .row-ico img { width: 44px; height: 44px; object-fit: contain; }
        .row-name {
          font-family: var(--font-display);
          font-size: 20px; color: var(--color-navy);
        }
        .row-line {
          height: 2px; background: var(--tint-navy-10);
          background-image: linear-gradient(to right, var(--tint-navy-15) 50%, transparent 50%);
          background-size: 6px 2px;
          width: 30px;
        }
        .row-star { font-size: 18px; }
        .board-foot {
          margin-top: 12px;
          background: repeating-linear-gradient(135deg, #1F8A8A 0 14px, #fff 14px 28px);
          height: 14px;
          border-radius: 10px;
          position: relative;
        }
        .heart {
          position: absolute; left: 50%; transform: translateX(-50%);
          bottom: -10px;
          background: #fff;
          color: var(--color-teal);
          width: 22px; height: 22px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 99px;
          font-size: 14px;
        }
      `));
}
window.KidsMenuCard = KidsMenuCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KidsMenuCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LogoConcepts.jsx
try { (() => {
/* global React */

function LogoConcepts() {
  const {
    concepts
  } = window.LT_DATA;
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "concepts",
    className: "section tight concepts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "concepts-head"
  }, /*#__PURE__*/React.createElement("h2", null, "Our Logo Concepts ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#F4C542"
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Four ways to build our brand. Which one's your favourite?")), /*#__PURE__*/React.createElement("div", {
    className: "concepts-grid"
  }, concepts.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: `concept ${hovered === i ? "hover" : ""}`,
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "concept-frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.logo,
    alt: c.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "concept-pill",
    style: {
      background: c.color
    }
  }, c.pill)))), /*#__PURE__*/React.createElement("style", null, `
        .concepts-head { margin-bottom: 24px; }
        .concepts-head h2 {
          font-family: var(--font-display);
          font-size: clamp(28px, 3.5vw, 42px);
          line-height: 1;
          color: var(--color-navy);
          margin: 0 0 6px;
        }
        .concepts-head .sub {
          font-family: var(--font-script);
          font-weight: 700;
          font-size: 22px;
          color: var(--color-charcoal);
          margin: 0;
        }
        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .concept {
          background: #fff;
          border: 1px solid var(--tint-navy-15);
          border-radius: 24px;
          padding: 16px 14px 18px;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
          transition: transform 250ms var(--ease-bounce), box-shadow 250ms ease;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
        }
        .concept:hover, .concept.hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .concept-frame {
          width: 100%;
          aspect-ratio: 1;
          background: var(--color-cream-soft);
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .concept-frame img { width: 92%; height: 92%; object-fit: contain; }
        .concept-pill {
          padding: 7px 18px; border-radius: 999px;
          color: #fff; font-weight: 900; font-size: 13px;
        }
        @media (max-width: 720px) {
          .concepts-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `));
}
window.LogoConcepts = LogoConcepts;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LogoConcepts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* global React */

function Nav() {
  const {
    nav,
    brand
  } = window.LT_DATA;
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    href: "#home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illust-truck.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("em", null, "Little"), /*#__PURE__*/React.createElement("strong", null, "Tradies"), /*#__PURE__*/React.createElement("i", null, "Cafe"))), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, nav.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    className: l.active ? "active" : ""
  }, l.label))), /*#__PURE__*/React.createElement("button", {
    className: "btn primary nav-cta"
  }, "Book a Table ", /*#__PURE__*/React.createElement("span", {
    className: "star"
  }, "\u2605")), /*#__PURE__*/React.createElement("style", null, `
        .nav {
          display: flex; align-items: center; gap: 24px;
          padding: 10px 14px 10px 16px;
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(10px);
          border: 1px solid var(--tint-navy-10);
          border-radius: 9999px;
          box-shadow: var(--shadow-sm);
          position: sticky; top: 16px; z-index: 50;
        }
        .nav-brand { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .nav-brand img { width: 44px; height: 44px; object-fit: contain; }
        .nav-brand span { font-family: var(--font-display); line-height: 0.95; font-size: 16px; }
        .nav-brand em  { color: var(--color-primary); display: block; font-style: normal; }
        .nav-brand strong { color: var(--color-info);  display: block; font-weight: 400; }
        .nav-brand i { color: var(--color-accent); display: block; font-style: normal; }
        .nav-links { display: flex; gap: 22px; margin-left: auto; font-family: var(--font-label); font-size: 16px; letter-spacing: 0.08em; text-transform: uppercase; }
        .nav-links a { color: var(--color-info); text-decoration: none; }
        .nav-links a:hover { color: var(--color-primary); }
        .nav-links a.active { color: var(--color-primary); text-decoration: underline; text-underline-offset: 6px; text-decoration-thickness: 3px; }
        .nav-cta { padding: 10px 18px; font-size: 14px; }
        @media (max-width: 840px) {
          .nav-links { display: none; }
        }
      `));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WelcomeBlock.jsx
try { (() => {
/* global React */

function WelcomeBlock() {
  const {
    values
  } = window.LT_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "welcome section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "welcome-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "welcome-photo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-tag"
  }, "Good Coffee. ", /*#__PURE__*/React.createElement("br", null), "Great Play. ", /*#__PURE__*/React.createElement("br", null), "Happy Families.")))), /*#__PURE__*/React.createElement("div", {
    className: "welcome-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hello"
  }, "Welcome to"), /*#__PURE__*/React.createElement("h2", {
    className: "title"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1F8A8A"
    }
  }, "Little"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#2F4E68"
    }
  }, "Tradies"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E67E22"
    }
  }, "Caf\xE9")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "We're a construction-themed family caf\xE9 where little builders can dig, climb and imagine, while parents relax with great coffee and feel-good food. Every visit is designed for smiles, sticky fingers and strong coffee."), /*#__PURE__*/React.createElement("div", {
    className: "values"
  }, values.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.label,
    className: "value"
  }, /*#__PURE__*/React.createElement("div", {
    className: "value-icon",
    style: {
      background: v.color + "26"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: v.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "value-label",
    style: {
      color: v.color
    }
  }, v.label)))))), /*#__PURE__*/React.createElement("style", null, `
        .welcome-grid {
          display: grid; gap: 36px;
          grid-template-columns: 1fr 1.05fr;
          align-items: center;
        }
        .photo-frame {
          border-radius: 28px; overflow: hidden;
          background: #6E5238;
          border: 3px solid var(--color-navy);
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4 / 3;
          position: relative;
        }
        .photo-inner {
          position: absolute; inset: 0;
          background:
            radial-gradient(circle at 30% 35%, rgba(242,179,44,0.18), transparent 55%),
            radial-gradient(circle at 70% 70%, rgba(31,141,138,0.20), transparent 55%),
            linear-gradient(160deg, #b08454 0%, #6E5238 60%, #3E2E1F 100%);
        }
        .photo-tag {
          position: absolute;
          right: 14%; top: 24%;
          background: rgba(0,0,0,0.55);
          color: #F7F3EA;
          padding: 16px 18px;
          border-radius: 18px;
          font-family: var(--font-script);
          font-weight: 700;
          font-size: 20px;
          line-height: 1.15;
          transform: rotate(-3deg);
        }
        .hello {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 22px;
          color: var(--color-navy);
          margin: 0 0 4px;
        }
        .title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 68px);
          line-height: 1.0;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
        }
        .lead { color: var(--fg-soft); margin: 0 0 22px; font-size: 17px; line-height: 1.6; }
        .values { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .value { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
        .value-icon {
          width: 60px; height: 60px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
        }
        .value-icon img { width: 44px; height: 44px; object-fit: contain; }
        .value-label { font-weight: 900; font-size: 13px; line-height: 1.25; white-space: pre-line; }
        @media (max-width: 860px) {
          .welcome-grid { grid-template-columns: 1fr; }
        }
      `));
}
window.WelcomeBlock = WelcomeBlock;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WelcomeBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Shared static data for the Little Tradies Café marketing site.

window.LT_DATA = {
  brand: {
    name: "Little Tradies Café",
    tagline: "Built for play. Brewed for parents.",
    slogan: ["BUILD.", "PLAY.", "EAT.", "REPEAT!"]
  },
  nav: [{
    label: "Home",
    href: "#home",
    active: true
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Logo Concepts",
    href: "#concepts"
  }, {
    label: "Kids Menu",
    href: "#menu"
  }, {
    label: "Play",
    href: "#play"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  values: [{
    label: "Parent\nFriendly",
    icon: "../../assets/illust-coffee-cup.png",
    color: "#1F8A8A"
  }, {
    label: "Imaginative\nPlay",
    icon: "../../assets/illust-helmet.png",
    color: "#F4C542"
  }, {
    label: "Great Coffee\n& Food",
    icon: "../../assets/illust-loader.png",
    color: "#E67E22"
  }, {
    label: "Local &\nWelcoming",
    icon: "../../assets/illust-truck.png",
    color: "#7D8B6A"
  }],
  concepts: [{
    title: "Family Café",
    pill: "Family Café",
    color: "#1F8A8A",
    logo: "../../assets/logo-main.png"
  }, {
    title: "SandPit",
    pill: "SandPit",
    color: "#E67E22",
    logo: "../../assets/logo-and-co.png"
  }, {
    title: "Play Zone",
    pill: "Play Zone",
    color: "#2F4E68",
    logo: "../../assets/logo-play-zone.png"
  }, {
    title: "Coffee Bar",
    pill: "Coffee Bar",
    color: "#1F8A8A",
    logo: "../../assets/logo-coffee-bar.png"
  }],
  menuItems: [{
    name: "Nuggets",
    icon: "../../assets/illust-loader.png",
    star: "#F4C542"
  }, {
    name: "Brekkie Roll",
    icon: "../../assets/illust-helmet.png",
    star: "#1F8A8A"
  }, {
    name: "Snack Box",
    icon: "../../assets/illust-toolbox.png",
    star: "#E67E22"
  }, {
    name: "Babycino",
    icon: "../../assets/illust-coffee-cup.png",
    star: "transparent"
  }],
  chips: [{
    label: "Coffee",
    icon: "../../assets/illust-coffee-cup.png",
    color: "#1F8A8A",
    fg: "#fff"
  }, {
    label: "Play",
    icon: "../../assets/illust-helmet.png",
    color: "#F4C542",
    fg: "#2F4E68"
  }, {
    label: "Food",
    icon: "../../assets/illust-loader.png",
    color: "#E67E22",
    fg: "#fff"
  }, {
    label: "Family",
    icon: "../../assets/illust-truck.png",
    color: "#7D8B6A",
    fg: "#fff"
  }],
  contact: {
    visit: {
      address1: "123 Little Builders Lane",
      address2: "Playtown VIC 3000",
      hours: "Open 7 Days · 7:00am – 5:00pm"
    },
    reach: {
      phone: "(03) 1234 5678",
      email: "hello@littletradiescafe.com.au",
      web: "littletradiescafe.com.au"
    },
    social: {
      facebook: "#",
      instagram: "#",
      tiktok: "#"
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

})();
