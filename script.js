
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('theme-toggle');
            const htmlElement = document.documentElement;
            
            // Verifica se há uma preferência salva
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                htmlElement.setAttribute('data-theme', savedTheme);
            } else {
                // Verifica se o usuário prefere tema escuro no sistema
                const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
                if (prefersDarkScheme.matches) {
                    htmlElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                }
            }
            
            // Alterna entre os temas quando o botão é clicado
            themeToggle.addEventListener('click', () => {
                const currentTheme = htmlElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                htmlElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Atualiza o texto do botão baseado no tema atual
                const buttonText = newTheme === 'dark' ? 'Modo claro' : 'Modo escuro';
                themeToggle.setAttribute('aria-label', buttonText);
            });
        });
