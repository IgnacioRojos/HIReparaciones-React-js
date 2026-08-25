// src/Components/Header/__tests__/header.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../header';

describe('Header', () => {
  test('renderiza los 4 links de navegación con su destino correcto', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /inicio/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /servicios/i })).toHaveAttribute('href', '/Servicios');
    expect(screen.getByRole('link', { name: /nosotros/i })).toHaveAttribute('href', '/Nosotros');
    expect(screen.getByRole('link', { name: /contacto/i })).toHaveAttribute('href', '/Contacto');
  });

  test('marca el link activo según la ruta actual', () => {
    render(
      <MemoryRouter initialEntries={['/Servicios']}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /servicios/i })).toHaveClass('active');
    expect(screen.getByRole('link', { name: /inicio/i })).not.toHaveClass('active');
  });
});
