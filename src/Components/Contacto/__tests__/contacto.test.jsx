// src/Components/Contacto/__tests__/contacto.test.jsx
import { render, screen } from '@testing-library/react';
import Contacto from '../contacto';

describe('Contacto', () => {
  test('renderiza el link de WhatsApp con el número correcto', () => {
    render(<Contacto />);
    const link = screen.getByRole('link', { name: /enviar mensaje/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/5493517653114'));
  });

  test('renderiza el link de teléfono con el número correcto', () => {
    render(<Contacto />);
    const link = screen.getByRole('link', { name: /llamar ahora/i });
    expect(link).toHaveAttribute('href', 'tel:+543517653114');
  });

  test('renderiza el link de Instagram', () => {
    render(<Contacto />);
    const link = screen.getByRole('link', { name: /ir al perfil/i });
    expect(link).toHaveAttribute('href', 'https://www.instagram.com/');
  });

  test('muestra los títulos de las tres vías de contacto', () => {
    render(<Contacto />);
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Teléfono')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
  });
});
