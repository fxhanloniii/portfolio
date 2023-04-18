// 3d Floating Cube

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(100, 100);
document.querySelector('.floating-cube').appendChild(renderer.domElement);

// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry(75, 75, 75);
const edges = new THREE.EdgesGeometry(geometry);
const material = new THREE.LineBasicMaterial({ color: 0xffffff });
const wireframe = new THREE.LineSegments(edges, material);
scene.add(wireframe);

// Position the camera and cube
camera.position.z = 200;

// Animate the cube
function animate() {
  requestAnimationFrame(animate);
  wireframe.rotation.x += 0.01;
  wireframe.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

// Light Mode Dark Mode Button
const modeToggle = document.querySelector('#modeToggle');
const html = document.querySelector('html');
const logoImg = document.querySelector('header img');
const github = document.querySelector('.github');
const twitter = document.querySelector('.twitter');

modeToggle.addEventListener('click', () => {
    html.classList.toggle('lightMode');
    if (html.classList.contains('lightMode')) {
        logoImg.src = './assets/blacklogonb.png'; // set logo to black
        github.src = './assets/githubLight.png'; // set logo to black
        twitter.src = './assets/twitterLight.png'; // set logo to black
        material.color.set(0x000000); // set outline color to black
        renderer.setClearColor(0xffffff); // set background color to white
        modeToggle.textContent = 'Dark Mode'; // change button text to 'Dark Mode'
        modeToggle.classList.add('lightMode');
    } else {
        logoImg.src = './assets/whitelogonb2.png'; // set logo to white
        github.src = './assets/githubDark.png'; // set logo to white
        twitter.src = './assets/twitterDark.png'; // set logo to white
        material.color.set(0xffffff); // set outline color to white
        renderer.setClearColor(0x000000); // set background color to black
        modeToggle.textContent = 'Light Mode'; // change button text to 'Light Mode'
        modeToggle.classList.remove('lightMode');
    }
});