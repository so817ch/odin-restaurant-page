export default function () {
  const contentDiv = document.querySelector('#content');
  contentDiv.textContent = '';

  const activeTag = document.querySelector('nav button.checked');
  if (activeTag) {
    activeTag.classList.remove('checked');
  }

  const menuTag = document.querySelector(`nav button[data-tag-name='menu']`);
  menuTag.classList.add('checked');

  const menuDiv = document.createElement('div');
  menuDiv.id = 'menu';
  menuDiv.innerHTML = `
    <h1>Welcome To Captain Toad's Café, Menu Page.</h1>
      <div class="card-container">
        <div class="card">
          <p>Mama mia, this coffee gives me more bounce than a Fire Flower! The mushroom pastries are-a perfect after a long day of jumping on Goombas. Captain Toad always saves me a seat by the lantern light. Let's-a go... to breakfast!</p>
          <p class="p-large p-right">Mario</p>
        </div>
        <div class="card">
          <p class="p-large">Hours</p>
          <p class="p-center">
            Sunday: 8am - 8pm <br>
            Monday: 6am - 6pm <br>
            Tuesday: 6am - 6pm <br>
            Wednesday: 6am - 6pm <br>
            Thursday: 6am - 9pm <br>
            Friday: 6am - 9pm <br>
            Saturday: 8am - 9pm
          </p>
        </div>
        <div class="card">
          <p class="p-large">Location</p>
          <p class="p-center">443 Toad Town Lane, Mushroom Kingdom</p>
        </div>
      </div>`;

  contentDiv.appendChild(menuDiv);
}