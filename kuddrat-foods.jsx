import React, { useState } from 'react';
import { Phone, Mail, MapPin, Leaf, MessageCircle, Info, Package } from 'lucide-react';

export default function KuddratFoods() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // UPDATE THESE WITH YOUR DETAILS
  const brandInfo = {
    name: 'Kuddrat Foods',
    tagline: 'Pure Organic. From Punjab. To You.',
    description: 'Premium organic food products from the fertile lands of Punjab. We bring you nature\'s bounty, cultivated with care and delivered with trust.',
    whatsappNumber: '919876543210', // REPLACE WITH YOUR WHATSAPP NUMBER
    email: 'info@kuddratfoods.com', // REPLACE WITH YOUR EMAIL
    phone: '+91 9876543210', // REPLACE WITH YOUR PHONE
    address: 'Punjab, India'
  };

  // YOUR PRODUCTS - EASY TO EDIT
  const products = [
    {
      id: 1,
      name: 'Organic Wheat',
      category: 'Grains',
      emoji: '🌾',
      description: 'Premium organic wheat flour, stone-ground. Rich in fiber and nutrients.',
      benefits: ['High protein', 'No pesticides', 'Fresh ground daily'],
      minOrder: '5 kg'
    },
    {
      id: 2,
      name: 'Organic Jaggery (Gur)',
      category: 'Sweeteners',
      emoji: '🟤',
      description: 'Traditional jaggery made from sugarcane. Unrefined and mineral-rich.',
      benefits: ['Energy boost', 'Rich in iron', 'Natural sweetness'],
      minOrder: '1 kg'
    },
    {
      id: 3,
      name: 'Organic Rice',
      category: 'Grains',
      emoji: '🍚',
      description: 'Hand-selected basmati and regular rice. Organic certified.',
      benefits: ['Pure quality', 'No chemicals', 'Long shelf life'],
      minOrder: '5 kg'
    },
    {
      id: 4,
      name: 'Organic Ghee',
      category: 'Dairy',
      emoji: '🥛',
      description: 'Pure cow ghee prepared traditionally. A2 milk-based.',
      benefits: ['High nutrition', 'Great taste', 'Long lasting'],
      minOrder: '500 ml'
    },
    {
      id: 5,
      name: 'Organic Spices Mix',
      category: 'Spices',
      emoji: '🫑',
      description: 'Blend of authentic Punjabi spices. Hand-selected and ground.',
      benefits: ['Fresh aroma', 'Bold flavor', 'No fillers'],
      minOrder: '500g'
    },
    {
      id: 6,
      name: 'Organic Dry Fruits',
      category: 'Nuts',
      emoji: '🥜',
      description: 'Premium almonds, cashews, and walnuts. Direct from farms.',
      benefits: ['High quality', 'Fresh harvest', 'No additives'],
      minOrder: '250g'
    },
  ];

  const handleWhatsAppClick = (product) => {
    let message = `Hello! I'm interested in enquiring about ${product.name}.`;
    message += `\n\nCould you provide more details about pricing, availability, and bulk orders?`;
    message += `\n\nMinimum order: ${product.minOrder}`;
    
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
      
      {/* Header */}
      <header style={{
        backgroundColor: 'var(--color-background-primary)',
        borderBottom: '3px solid #8b6f47',
        padding: '1.5rem 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Leaf size={32} style={{ color: '#8b6f47' }} />
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '600', margin: 0, color: 'var(--color-text-primary)' }}>
                {brandInfo.name}
              </h1>
              <p style={{ fontSize: '12px', margin: '0.25rem 0 0 0', color: '#8b6f47' }}>
                {brandInfo.tagline}
              </p>
            </div>
          </div>
          <a 
            href={`https://wa.me/${brandInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#25d366',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--border-radius-md)',
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--color-background-primary)',
        padding: '3rem 2rem',
        marginBottom: '2rem'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Leaf size={48} style={{ color: '#8b6f47', marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
            Welcome to {brandInfo.name}
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {brandInfo.description}
          </p>
          <p style={{ fontSize: '16px', color: '#8b6f47', fontWeight: '600', marginBottom: '2rem' }}>
            📍 {brandInfo.address}
          </p>
          <a 
            href={`https://wa.me/${brandInfo.whatsappNumber}?text=Hello! I would like to know more about your products.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#8b6f47',
              color: 'white',
              borderRadius: 'var(--border-radius-md)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px'
            }}
          >
            Inquire Now on WhatsApp
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)', textAlign: 'center' }}>
            Our Products
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
            Authentic organic food straight from Punjab farms
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {products.map(product => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                style={{
                  backgroundColor: 'var(--color-background-primary)',
                  borderRadius: 'var(--border-radius-lg)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  fontSize: '80px',
                  padding: '2rem',
                  textAlign: 'center',
                  backgroundColor: 'var(--color-background-secondary)'
                }}>
                  {product.emoji}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '12px',
                    backgroundColor: '#8b6f47',
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--border-radius-md)',
                    marginBottom: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {product.category}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                    {product.description}
                  </p>
                  <div style={{ marginBottom: '1rem' }}>
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} style={{ fontSize: '13px', color: '#8b6f47', marginBottom: '0.3rem' }}>
                        ✓ {benefit}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                    Min. order: <strong>{product.minOrder}</strong>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppClick(product);
                    }}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#25d366',
                      color: 'white',
                      border: 'none',
                      borderRadius: 'var(--border-radius-md)',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <MessageCircle size={16} />
                    Enquire on WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          padding: '1rem'
        }}
        onClick={() => setSelectedProduct(null)}
        >
          <div 
            style={{
              backgroundColor: 'var(--color-background-primary)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '2rem',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  backgroundColor: '#8b6f47',
                  color: 'white',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--border-radius-md)',
                  marginBottom: '0.75rem',
                  fontWeight: '600'
                }}>
                  {selectedProduct.category}
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: '600', margin: '0.5rem 0 0 0', color: 'var(--color-text-primary)' }}>
                  {selectedProduct.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: 'var(--color-text-secondary)'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{
              fontSize: '80px',
              textAlign: 'center',
              padding: '1.5rem',
              backgroundColor: 'var(--color-background-secondary)',
              borderRadius: 'var(--border-radius-md)',
              marginBottom: '1.5rem'
            }}>
              {selectedProduct.emoji}
            </div>

            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {selectedProduct.description}
            </p>

            <div style={{ backgroundColor: 'var(--color-background-secondary)', padding: '1.5rem', borderRadius: 'var(--border-radius-md)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginTop: 0, marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
                Key Benefits
              </h4>
              {selectedProduct.benefits.map((benefit, idx) => (
                <div key={idx} style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                  ✓ {benefit}
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                <strong>Minimum order:</strong> {selectedProduct.minOrder}
              </p>
            </div>

            <button
              onClick={() => handleWhatsAppClick(selectedProduct)}
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#25d366',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--border-radius-md)',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}
            >
              <MessageCircle size={20} />
              Send Enquiry on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Why Choose Us */}
      <section style={{
        backgroundColor: 'var(--color-background-primary)',
        padding: '3rem 2rem',
        margin: '2rem 0'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '2rem', color: 'var(--color-text-primary)', textAlign: 'center' }}>
            Why Choose Kuddrat Foods?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: Leaf, title: '100% Organic', desc: 'Certified organic products from trusted Punjab farms' },
              { icon: Package, title: 'Fresh Harvested', desc: 'Handpicked and delivered fresh to maintain quality' },
              { icon: Info, title: 'Transparent', desc: 'Direct from farms. No middlemen, no compromise' },
              { icon: Phone, title: 'Personal Service', desc: 'Direct contact with our team for bulk orders' }
            ].map((item, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '1.5rem',
                backgroundColor: 'var(--color-background-secondary)',
                borderRadius: 'var(--border-radius-lg)',
                borderLeft: '4px solid #8b6f47'
              }}>
                <item.icon size={32} style={{ color: '#8b6f47', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style({
        padding: '3rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '2rem', color: 'var(--color-text-primary)', textAlign: 'center' }}>
          Get in Touch
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          <a
            href={`https://wa.me/${brandInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-background-primary)',
              padding: '2rem',
              borderRadius: 'var(--border-radius-lg)',
              textDecoration: 'none',
              border: '2px solid #25d366',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <MessageCircle size={32} style={{ color: '#25d366', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              WhatsApp
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
              Quick inquiry & bulk orders
            </p>
          </a>

          <div style={{
            backgroundColor: 'var(--color-background-primary)',
            padding: '2rem',
            borderRadius: 'var(--border-radius-lg)',
            textAlign: 'center',
            border: '2px solid var(--color-border-secondary)'
          }}>
            <Phone size={32} style={{ color: '#8b6f47', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              Phone
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
              {brandInfo.phone}
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--color-background-primary)',
            padding: '2rem',
            borderRadius: 'var(--border-radius-lg)',
            textAlign: 'center',
            border: '2px solid var(--color-border-secondary)'
          }}>
            <Mail size={32} style={{ color: '#8b6f47', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              Email
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
              {brandInfo.email}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-background-primary)',
        borderTop: '2px solid var(--color-border-tertiary)',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', margin: 0 }}>
          © 2024 {brandInfo.name}. All products are certified organic. | {brandInfo.address}
        </p>
      </footer>
    </div>
  );
}