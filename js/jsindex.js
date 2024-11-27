/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let slideIndex = 1;
            showSlides(slideIndex);

            // Troca os slides com base no índice
            function showSlides(index) {
                const slides = document.querySelectorAll('.slides');
                const dots = document.querySelectorAll('.dot');
                if (index > slides.length) {
                    slideIndex = 1;
                }
                if (index < 1) {
                    slideIndex = slides.length;
                }

                slides.forEach(slide => slide.style.display = 'none');
                dots.forEach(dot => dot.classList.remove('active-dot'));

                slides[slideIndex - 1].style.display = 'block';
                dots[slideIndex - 1].classList.add('active-dot');
            }

            // Função para alterar slides manualmente
            function changeSlide(step) {
                showSlides(slideIndex += step);
            }

            // Função para ir a um slide específico
            function currentSlide(index) {
                showSlides(slideIndex = index);
            }

