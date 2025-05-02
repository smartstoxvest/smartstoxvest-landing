const launchContainer = document.getElementById('launch-button-container');

if (launchContainer) {
  if (typeof launchEnabled !== "undefined" && launchEnabled) {
    launchContainer.innerHTML = `
      <a href="/app" class="button bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md transition">
        🚀 Launch the SmartStoxVest App
      </a>
    `;
  } else {
    launchContainer.innerHTML = `
      <button disabled class="bg-gray-400 text-white px-6 py-3 rounded-lg cursor-not-allowed shadow-md">
        🚧 App Upgrade in Progress
      </button>
    `;
  }
}
