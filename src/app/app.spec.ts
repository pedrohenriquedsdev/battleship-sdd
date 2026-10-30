import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('cria o shell da aplicação', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renderiza o título do jogo em português', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelector('h1')?.textContent).toContain('Batalha Naval');
  });

  it('renderiza cabeçalho, área principal e rodapé', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelector('header')).not.toBeNull();
    expect(elemento.querySelector('main')).not.toBeNull();
    expect(elemento.querySelector('footer')).not.toBeNull();
  });

  it('renderiza o ícone Lucide como svg', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const elemento = fixture.nativeElement as HTMLElement;
    expect(elemento.querySelector('header svg')).not.toBeNull();
  });
});
