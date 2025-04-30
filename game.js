/*
// --- SETUP ---
Initialize scene
Initialize camera (OrthographicCamera or PerspectiveCamera)
Set camera position above player, looking straight down (like drone view)

Initialize WebGLRenderer
Attach renderer to HTML document

Load assets:
    - Player model (simple cube or 3D model)
    - Bullet model (small spheres or cubes)
    - Enemy model (simple cubes or spheres)
    - Map / environment (walls, obstacles, floor)

Create player object:
    - position (x, y, z)
    - rotation (player faces mouse position)
    - health
    - ammo
    - movement speed

Create input handlers:
    - WASD for movement
    - Mouse movement to aim
    - Mouse click to shoot

Initialize arrays for:
    - Bullets
    - Enemies

// --- INPUT HANDLING ---
On mouse move:
    Get mouse world position
    Rotate player to face mouse position (calculate angle)

On W key:
    Move player forward

On S key:
    Move player backward

On A key:
    Move player left

On D key:
    Move player right

On mouse click:
    If player.ammo > 0:
        Create new bullet at player position
        Set bullet direction toward mouse
        Reduce player.ammo
        Play shooting sound
    Else:
        Play "empty ammo" sound

On R key:
    Reload weapon (reset ammo count)

// --- GAME LOOP (Animation Frame) ---
function animate() {
    Request next animation frame (requestAnimationFrame)

    Update player movement based on keyboard input
    Update player rotation based on mouse position

    For each bullet:
        Move bullet forward
        Check if bullet collides with enemy
            If yes:
                Damage enemy
                If enemy.health <= 0:
                    Remove enemy
                    Increase player score

    For each enemy:
        Move toward player
        If enemy is close enough:
            Attack player
            Reduce player health

    If player.health <= 0:
        End game
        Show "Game Over" screen

    Render scene from top-down camera view
}

// --- COLLISION DETECTION ---
For bullet-enemy collisions:
    Use bounding box or sphere collision detection

For player-wall collisions:
    Prevent player from moving through walls

// --- START GAME ---
Lock mouse if needed (optional)
Start animation loop

*/