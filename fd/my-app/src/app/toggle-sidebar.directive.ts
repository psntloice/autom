import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[appToggleSidebar]',
  standalone: true
})
export class ToggleSidebarDirective {

  constructor() { }

  @HostListener('click') onClick() {
    // Assuming you have a sidebar element with an id 'sidebar'
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }
}

