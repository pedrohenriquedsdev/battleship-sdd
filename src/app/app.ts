import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAnchor } from '@lucide/angular';

@Component({
  selector: 'app-root',
  imports: [LucideAnchor],
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly titulo = signal('Batalha Naval');
}
