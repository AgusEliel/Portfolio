const mainMenu = document.querySelector(".mainMenu");
            const closeMenu = document.querySelector(".closeMenu");
            const openMenu = document.querySelector(".openMenu");
            const menu_items = document.querySelectorAll("nav .mainMenu li a");
            const html = document.querySelectorAll(".html");

            openMenu.addEventListener("click", show);
            closeMenu.addEventListener("click", close);

            menu_items.forEach((item) => {
                item.addEventListener("click", function () {
                    close();
                });
            });

            function show() {
                mainMenu.style.display = "flex";
                mainMenu.style.top = "0";
                document.getElementsByTagName("html")[0].style.overflow =
                    "hidden";
            }
            function close() {
                mainMenu.style.top = "-150%";
                document.getElementsByTagName("html")[0].style.overflow =
                    "";
            }