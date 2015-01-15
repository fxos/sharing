import { View } from 'components/fxos-mvc/dist/mvc';

export default class ShareSettingsView extends View {
  constructor() {
    this.el = document.createElement('gaia-list');
    this.el.id = 'share-settings';
  }

  render() {
    super();

    setTimeout(() => {
      this.shareEnabledElt = document.getElementById('share-enabled');
      this.shareEnabledElt.addEventListener(
        'click', this._handleClick.bind(this));

      this.shareDescriptionElt = document.getElementById('share-description');
    });
  }

  template() {
    var string = `
      <li>
        <div>
          <h3>Share My Apps</h3>
          <h4 id="share-description">Turn on to share apps</h4>
        </div>
        <input type="checkbox" id="share-enabled"></input>
      </li>
      <li>
        <div>
          <h3>Device Name</h3>
          <h4 id="device-name">Doug Phone</h4>
        </div>
        <i class="forward-light"></i>
      </li>
    `;

    return string;
  }

  displayBroadcast(enabled) {
    this.shareDescriptionElt.textContent = enabled ?
      'Sharing On' : 'Turn on to share apps';
    this.shareEnabledElt.checked = !!enabled;
  }

  _handleClick(e) {
    this.controller.toggleBroadcasting();
  }
}