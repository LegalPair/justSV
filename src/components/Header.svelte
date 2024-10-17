<script>
    let openModal = false;  // Mobile menu modal state
    let showDropdown = false;  // Dropdown menu state
    let userName = null; // Placeholder for user's name
  
    // Placeholder functions for login and logout
    function logout() {
        userName = null;  // Simulate user logout
        showDropdown = false; // Close dropdown after logout
    }
  
    function login() {
        window.location.href = '/auth'; // Redirect to login page
    }
  
    function toggleMenu() {
        openModal = !openModal;
    }
  
    function toggleDropdown() {
        showDropdown = !showDropdown; // Toggle the dropdown menu visibility
    }
</script>

<header class="header">
    <div class="container">
      <a href="/" class="logo">
        <h1 class="font-semibold">
          Legal Pair <span class="text-indigo-400">Technology</span>
        </h1>
      </a>
      <div class="right-section">
        {#if userName}
          <!-- Display first name instead of "START" when user is logged in -->
          <button class="start-button md:hidden" on:click={toggleDropdown}>Hello {userName}</button>
          {#if showDropdown}
            <div class="dropdown">
              <a href="/my-account">My Account</a>
              <a href="/privatedashboard">Dashboard</a>
              <a href="/favorites">Transaction</a>
              <button on:click={logout} class="logout-button">Log out</button>
            </div>
          {/if}
        {:else}
          <a href="/auth" class="start-button md:hidden">START</a>
        {/if}
        <button on:click={toggleMenu} class="menu-button md:hidden grid place-items-center">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      
      <nav class="nav-links">
        <a href="/" class="duration-200 hover:text-indigo-400 cursor-pointer">Home</a>
        <a href="/our-team" class="duration-200 hover:text-indigo-400 cursor-pointer">Our Team</a>
        <a href="/subscription" class="duration-200 hover:text-indigo-400 cursor-pointer">Subscription</a>
        <a href="/contact" class="duration-200 hover:text-indigo-400 cursor-pointer">Contact Us</a>
      </nav>
      <div class="auth-buttons">
        {#if userName}
          <!-- Show first name with 'Hello' and logout button when logged in -->
          <button class="user-name" on:click={toggleDropdown}>Hello, {userName}</button>
          {#if showDropdown}
            <div class="dropdown">
              <a href="/my-account">My Account</a>
              <a href="/privatedashboard">Dashboard</a>
              <a href="/favorites">Transaction</a>
              <button on:click={logout} class="logout-button">Log out</button>
            </div>
          {/if}
        {:else}
          <!-- Show login and start buttons when not logged in -->
          <button on:click={login} class="login-button">Log in</button> 
          <a href="/auth" class="demo-button">START</a>
        {/if}
      </div>
    </div>
  
    <!-- Mobile menu (when openModal is true) -->
    {#if openModal}
      <div class="mobile-menu md:hidden">
        <button on:click={toggleMenu} class="close-button">
          ✖️
        </button>
        <nav class="mobile-nav">
          <a href="/" on:click={toggleMenu}>Home</a>
          <a href="/our-team" on:click={toggleMenu}>Our Team</a>
          <a href="/subscription" on:click={toggleMenu}>Subscription</a>
          <a href="/contact" on:click={toggleMenu}>Contact Us</a>
          {#if userName}
            <!-- Add Logout in the mobile menu -->
            <button on:click={logout} class="logout-button">Logout</button>
          {/if}
        </nav>
      </div>
    {/if}
</header>

<style>
    /* Additional styles for dropdown */
    .dropdown {
      position: absolute;
      background-color: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      right: 0;
      top: 50px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      width: 200px;
    }
  
    .dropdown a {
      padding: 10px;
      text-align: left;
      color: black;
      text-decoration: none;
      border-bottom: 1px solid #ccc;
    }
  
    .dropdown a:hover {
      background-color: #f0f0f0;
    }
  
    .header {
      background-color: #d1e3fd;
      color: black;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 0;
    }
  
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .nav-links {
      display: flex;
      gap: 2rem;
    }
  
    .auth-buttons {
      display: flex;
      gap: 1rem;
    }
  
    a {
      text-decoration: none;
      color: rgb(4, 4, 4);
    }
  
    a:hover {
      text-decoration: none;
    }
  
    .login-button, .user-name {
      padding: 0.5rem 1rem;
      border: 2px solid #6978ff;
      border-radius: 0.25rem;
      text-align: center;
      background-color: transparent;
      transition: background-color 0.3s, color 0.3s, border-color 0.3s;
      cursor: pointer;
    }
  
    .login-button:hover, .user-name:hover {
      background-color: #6978ff;
      color: black;
    }
  
    .demo-button {
      padding: 0.5rem 1rem;
      background-color: #6978ff;
      color: white;
      border-radius: 0.25rem;
      text-align: center;
      transition: background-color 0.3s, color 0.3s;
    }
  
    .demo-button:hover {
      background-color: #4d56ff;
      color: white;
    }
  
    .menu-button {
      display: none;
      margin: 0;
      padding: 0;
    }
  
    .right-section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      padding: 0;
    }
  
    .start-button {
      margin: 0;
      padding: 0.5rem 1rem;
      background-color: #6978ff;
      color: white;
      border-radius: 0.25rem;
      text-align: center;
      transition: background-color 0.3s, color 0.3s;
    }
  
    .start-button:hover {
      background-color: #4d56ff;
      color: white;
    }
  
    @media (max-width: 768px) {
      .menu-button {
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
      }
  
      .nav-links, .auth-buttons {
        display: none;
      }
  
      .container {
        justify-content: space-between;
      }
    }
  
    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 60%;
      height: 100%;
      background-color: white;
      z-index: 2000;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    }
  
    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }
  
    .mobile-nav a {
      padding: 1rem;
      text-align: left;
      color: black;
      text-decoration: none;
      font-size: 1.2rem;
      border-bottom: 1px solid #ccc;
    }
  
    .logout-button {
      padding: 1rem;
      text-align: left;
      color: black;
      cursor: pointer;
      text-decoration: none;
      border-top: 1px solid #ccc;
    }
  
    .close-button {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      align-self: flex-end;
    }
</style>
