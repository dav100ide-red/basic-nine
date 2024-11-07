import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterModule],
    template: `
        <!-- footer.component.html -->
        <footer class="footer">
            <div class="footer__content">
                <!-- Branding / Logo -->
                <div class="footer__brand">
                    <h2>Footer component</h2>
                    <p>Delivering excellence since 2024.</p>
                </div>

                <!-- Navigation Links -->
                <div class="footer__links">
                    <a routerLink="#about">About Us</a>
                    <a routerLink="#services">Services</a>
                    <a routerLink="#contact">Contact</a>
                    <a routerLink="#privacy">Privacy Policy</a>
                </div>

                <!-- Social Media Links -->
                <div class="footer__social">
                    <a routerLink="#" aria-label="Facebook">FB</a>
                    <a routerLink="#" aria-label="Twitter">TW</a>
                    <a routerLink="#" aria-label="LinkedIn">LN</a>
                    <a routerLink="#" aria-label="Instagram">IG</a>
                </div>
            </div>

            <div class="footer__bottom">
                <p>&copy; 2024 YourBrand. All rights reserved.</p>
            </div>
        </footer>
    `,
    styles: `
        /* footer.component.scss */
.footer {
    margin-top:6rem;
  background-color: #f9f9f9; // Light background color
  color: #333; // Darker text color for readability
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  &__brand h2 {
    font-size: 1.8rem;
    margin: 0;
    color: #007acc; // Primary accent color
  }

  &__brand p {
    font-size: 0.9rem;
    color: #555; // Muted text color
  }

  &__links,
  &__social {
    display: flex;
    gap: 1rem;

    a {
      color: #333; // Dark text for readability
      font-size: 0.9rem;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #007acc; // Hover accent color
      }
    }
  }

  &__social-icon {
    font-size: 1.2rem;
    background: #e0e0e0; // Light background for icons
    border-radius: 50%;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #007acc;
      color: #ffffff; // White text on hover for contrast
    }
  }

  &__bottom {
    margin-top: 2rem;
    font-size: 0.8rem;
    color: #777; // Muted color for copyright text
  }
}

    `,
})
export class FooterComponent {}
