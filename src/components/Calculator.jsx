import React, { useState } from 'react';
import { Calculator as CalcIcon, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const Calculator = ({ onOpenContact }) => {
  const [roomSize, setRoomSize] = useState(200); // sq ft
  const [mushroomType, setMushroomType] = useState('oyster'); // 'oyster', 'button', 'cordyceps'

  // Pricing & ROI Logic
  const specs = {
    oyster: {
      name: 'Oyster Mushroom (ऑयस्टर मशरूम)',
      ratePerKg: 180, // Buyback rate
      setupCostPerSqFt: 300,
      yieldPerSqFtMonth: 1.8, // kg
    },
    button: {
      name: 'Button Mushroom (बटन मशरूम)',
      ratePerKg: 140,
      setupCostPerSqFt: 350,
      yieldPerSqFtMonth: 2.2,
    },
    cordyceps: {
      name: 'Cordyceps - Keeda Jadi (कीड़ा जड़ी)',
      ratePerKg: 12000,
      setupCostPerSqFt: 1500,
      yieldPerSqFtMonth: 0.15,
    }
  };

  const selected = specs[mushroomType];
  const setupCost = roomSize * selected.setupCostPerSqFt;
  const monthlyYieldKg = Math.round(roomSize * selected.yieldPerSqFtMonth);
  const grossMonthlyIncome = monthlyYieldKg * selected.ratePerKg;
  const estimatedCost = Math.round(grossMonthlyIncome * 0.35); // ~35% operational cost
  const netMonthlyProfit = grossMonthlyIncome - estimatedCost;

  return (
    <section id="calculator" className="section-padding" style={{ background: '#f0f6f3' }}>
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Interactive ROI Estimator</span>
          <h2 className="section-title">Kheti Se Kamai Calculator</h2>
          <p className="section-subtitle">
            Apne room ya space ke size ke hisab se dekhein ki aap har mahine kitni income generate kar sakte hain!
          </p>
        </div>

        <div className="calculator-card">
          <div className="calc-grid">
            {/* Input Controls */}
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CalcIcon color="var(--primary)" />
                <span>Space & Crop Details</span>
              </h3>

              {/* Mushroom Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontWeight: '600', fontSize: '0.95rem', display: 'block', marginBottom: '10px' }}>
                  Select Mushroom Variety (मशरूम की वैरायटी):
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                  <button
                    onClick={() => setMushroomType('oyster')}
                    className={`btn ${mushroomType === 'oyster' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ padding: '10px', fontSize: '0.85rem' }}
                  >
                    Oyster
                  </button>
                  <button
                    onClick={() => setMushroomType('button')}
                    className={`btn ${mushroomType === 'button' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ padding: '10px', fontSize: '0.85rem' }}
                  >
                    Button
                  </button>
                  <button
                    onClick={() => setMushroomType('cordyceps')}
                    className={`btn ${mushroomType === 'cordyceps' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ padding: '10px', fontSize: '0.85rem' }}
                  >
                    Cordyceps
                  </button>
                </div>
              </div>

              {/* Room Size Slider */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '600', fontSize: '0.95rem' }}>Available Space Size:</label>
                  <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1.1rem' }}>
                    {roomSize} Sq. Ft. ({Math.round(roomSize / 100)} Room)
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="50"
                  value={roomSize}
                  onChange={(e) => setRoomSize(Number(e.target.value))}
                  className="range-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>100 sq ft (10x10 Room)</span>
                  <span>500 sq ft</span>
                  <span>1000 sq ft (Hall)</span>
                </div>
              </div>

              {/* Features Included */}
              <div style={{ background: '#ffffff', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '8px', color: 'var(--primary-dark)' }}>
                  Is Estimation Mein Shaamil Hai:
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'grid', gap: '6px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} color="var(--primary)" /> Complete Setup Kit & Climate Equipment</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} color="var(--primary)" /> High-quality Spawns & Substrate</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} color="var(--primary)" /> Fixed Guaranteed Buyback Contract Rate: ₹{selected.ratePerKg}/kg</li>
                </ul>
              </div>
            </div>

            {/* Results Display Box */}
            <div className="calc-result-box">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-glow)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  <Sparkles size={18} /> Estimated Monthly Net Income
                </div>
                <div className="calc-price">
                  ₹{netMonthlyProfit.toLocaleString('en-IN')} <span style={{ fontSize: '1rem', color: '#ffffff', opacity: 0.8 }}>/ month</span>
                </div>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  Sabhi kharche katne ke baad shuddh aamdani.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px', margin: '20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Estimated Setup Investment</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
                    ₹{setupCost.toLocaleString('en-IN')}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Monthly Production</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff' }}>
                    {monthlyYieldKg} kg / month
                  </div>
                </div>
              </div>

              <button 
                onClick={onOpenContact} 
                className="btn btn-gold"
                style={{ width: '100%', padding: '14px' }}
              >
                <span>Book Setup For My Room</span>
                <TrendingUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
