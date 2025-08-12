document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim()
        };

        try {
            const res = await fetch("https://portbackend-fe4u.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                alert("✅ Message send for Prashant Thakur!");
                form.reset();
            } else {
                alert("❌ Failed to send message: " + data.message);
            }
        } catch (err) {
            console.error("Error:", err);
            alert("❌ Error connecting to server");
        }
    });
});

  
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  const words = ["Web Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer", "Programmer"];
  let i = 0;
  const textSpan = document.getElementById("typed-text");

  function showWord() {
    textSpan.innerText = words[i];
    i = (i + 1) % words.length;
  }

  showWord(); 
  setInterval(showWord, 2000); 

  

