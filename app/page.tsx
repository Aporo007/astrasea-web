"use client";
import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { Youtube, Linkedin, Globe, MessageCircle, Instagram, Shield, Award, Facebook, Zap, Target, Wind, Gauge, MapPin, Volume2, VolumeX, Ship, Anchor, Hammer, BadgeDollarSign, Mail, Send, Medal, CheckCircle2, Star } from 'lucide-react';

export default function AstraSeaBrandPerfect() {
  const [lang, setLang] = useState('CN'); 
  const [isMuted, setIsMuted] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const WHATSAPP = "8613138951395";
  const LOGO_IMG = "/images/logo-dark.jpg"; 
  const BGM_URL = "/bgm.mp3"; 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const wakeAudio = () => {
      if (audioRef.current && isMuted) {
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('click', wakeAudio);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', wakeAudio);
    };
  }, [isMuted]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    CN: {
      nav: [{name:'首页',id:'home'}, {name:'关于',id:'about'}, {name:'资质',id:'honors'}, {name:'服务',id:'products'}, {name:'联系',id:'contact'}],
      hero: {
        loc: '添瑶星造船（珠海）有限公司',
        brand: 'ASTRASEA | 添瑶星',
        philosophy: '驾驭海洋 · 更快 · 更稳 · 更远',
        attitude: '为海洋而生',
        position: '高性能海钓艇制造商'
      },
      about: {
        title: '关于添瑶星',
        founder: '创始人：谭华添先生',
        exp: '30年造船资深专家，深耕船舶工程与技术研发。',
        desc: '成立于2018年，位于珠海游艇产业园。专注于高性能船舶研发，已在全球交付超800艘验证船舶。'
      },
      honors: {
        title: '权威奖励与企业资质',
        list: [
          { t: '国家高新技术企业', d: '研发实力认定' },
          { t: 'ISO 9001 质量认证', d: '国际管理标准' },
          { t: 'CCS 中国船级社', d: '建造安全标准' },
          { t: 'IMO 国际海事认证', d: '全球通行准则' },
          { t: '香港海事处维修商', d: '指定维保伙伴' },
          { t: '云洲科技战略伙伴', d: '智能船联研' }
        ]
      },
      products: {
        title: '制造与增值服务',
        own: '核心自主制造',
        service: '定制与代卖服务',
        itemsOwn: [
          { n: 'TYS-014 深海投料船', s: '旗舰型号 | 23.9m | 3.5L/NM 低耗' },
          { n: '高性能钓鱼船', s: '极致速度 | 45kn | 碳纤维材质' }
        ],
        itemsExtra: [
          { n: '新船个性化定制', s: '私人设计、商务/休闲全方案定制', i: <Ship /> },
          { n: '二手船代卖服务', s: '专业估值、全球分销渠道快速变现', i: <BadgeDollarSign /> },
          { n: '专业维修维保', s: '香港游艇北上指定维修点、引擎保养', i: <Hammer /> }
        ]
      },
      contact: {
        title: '客户留言板',
        pName: '公司名称 / 个人姓名',
        pTel: '联系方式 (手机/WhatsApp)',
        pMsg: '您的需求描述 (如定制尺寸、代卖型号、维修内容)',
        btn: '提交需求 (后台可见)'
      }
    },
    EN: {
      nav: [{name:'Home',id:'home'}, {name:'About',id:'about'}, {name:'Awards',id:'honors'}, {name:'Services',id:'products'}, {name:'Contact',id:'contact'}],
      hero: {
        loc: 'Tim Yiu Sing Boatbuilding (Zhuhai) Co., Ltd.',
        brand: 'ASTRASEA',
        philosophy: 'Mastering the Ocean · Faster · Steadier · Further',
        attitude: 'Born for the Ocean',
        position: 'High Performance Fishing Yacht Manufacturer'
      },
      about: {
        title: 'About Us',
        founder: 'Chairman: Mr. Tan Huatian',
        exp: '30+ years expert in Naval Architecture.',
        desc: 'Founded in 2018 in Zhuhai. Over 800 high-performance vessels delivered worldwide.'
      },
      honors: {
        title: 'Awards & Qualifications',
        list: [
          { t: 'High-Tech Enterprise', d: 'National R&D' },
          { t: 'ISO 9001 Certified', d: 'Quality Management' },
          { t: 'CCS Standards', d: 'Ship Classification' },
          { t: 'IMO Certified', d: 'International Maritime' },
          { t: 'HK Marine Partner', d: 'Official Maintenance' },
          { t: 'Strategic Partner', d: 'AI Research' }
        ]
      },
      products: {
        title: 'Manufacturing & Services',
        own: 'Core Manufacturing',
        service: 'Bespoke & Brokerage',
        itemsOwn: [
          { n: 'TYS-014 Aqua Barge', s: '23.9m | 3.5L/NM Efficiency' },
          { n: 'Pro Fishing Boat', s: '45kn High Speed | Carbon Fiber' }
        ],
        itemsExtra: [
          { n: 'Bespoke Custom Build', s: 'Full design to delivery service', i: <Ship /> },
          { n: 'Brokerage Service', s: 'Valuation & Global sales channel', i: <BadgeDollarSign /> },
          { n: 'Maintenance & Refit', s: 'Official MRO & Engine maintenance', i: <Hammer /> }
        ]
      },
      contact: {
        title: 'Inquiry Board',
        pName: 'Company / Personal Name',
        pTel: 'Contact (Tel/WhatsApp)',
        pMsg: 'Requirement details (Custom/Sale/MRO)',
        btn: 'Submit Inquiry'
      }
    },
    AR: {
      nav: [{name:'الرئيسية',id:'home'}, {name:'حول',id:'about'}, {name:'المؤهلات',id:'honors'}, {name:'الخدمات',id:'products'}, {name:'اتصل',id:'contact'}],
      hero: {
        loc: 'تيم يو سينغ لبناء السفن (تشوهاي) المحدودة',
        brand: 'ASTRASEA | تيان ياو سينغ',
        philosophy: 'إتقان المحيط · أسرع · أكثر استقراراً · أبعد',
        attitude: 'ولدت للمحيط',
        position: 'مصنع قوارب الصيد عالية الأداء'
      },
      about: {
        title: 'حول تيان ياو سينغ',
        founder: 'المؤسس: السيد تان هواتيان',
        exp: 'خبير بناء سفن منذ 30 عاماً، متخصص في هندسة السفن والبحث والتطوير.',
        desc: 'تأسست في عام 2018 في مجمع صناعة اليخوت في تشوهاي. نركز على السفن عالية الأداء وسلمنا أكثر من 800 سفينة معتمدة عالمياً.'
      },
      honors: {
        title: 'الجوائز الرسمية ومؤهلات المؤسسة',
        list: [
          { t: 'مؤسسة وطنية للتكنولوجيا العالية', d: 'الاعتراف بقوة البحث والتطوير' },
          { t: 'شهادة ISO 9001', d: 'معايير الإدارة الدولية' },
          { t: 'CCS معايير السلامة', d: 'تصنيف السفن' },
          { t: 'شهادة IMO الدولية', d: 'القواعد البحرية العالمية' },
          { t: 'شريك صيانة بحرية هونج كونج', d: 'مركز صيانة معتمد' },
          { t: 'شريك استراتيجي', d: 'البحث المشترك للسفن الذكية' }
        ]
      },
      products: {
        title: 'التصنيع والخدمات المضافة',
        own: 'التصنيع المستقل الأساسي',
        service: 'التخصيص والوساطة',
        itemsOwn: [
          { n: 'سفينة التغذية TYS-014', s: 'الموديل الرائد | 23.9م | استهلاك منخفض' },
          { n: 'قارب صيد عالي الأداء', s: 'سرعة 45 عقدة | ألياف الكربون' }
        ],
        itemsExtra: [
          { n: 'بناء مخصص', s: 'تصميم وبناء السفن حسب الطلب', i: <Ship /> },
          { n: 'خدمة بيع السفن المستعملة', s: 'تقييم احترافي وقنوات بيع عالمية', i: <BadgeDollarSign /> },
          { n: 'الصيانة والترميم', s: 'مركز صيانة معتمد لمحركات اليخوت', i: <Hammer /> }
        ]
      },
      contact: {
        title: 'لوحة استفسارات العملاء',
        pName: 'اسم الشركة / الاسم الشخصي',
        pTel: 'معلومات الاتصال (واتساب)',
        pMsg: 'وصف متطلباتك (المقاس، النوع، الصيانة)',
        btn: 'إرسال الطلب'
      }
    }
  }[lang];

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZJWR3L5VDZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZJWR3L5VDZ');
        `}
      </Script>

      <div style={{ background: '#010811', color: '#fff', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
        <audio ref={audioRef} src={BGM_URL} loop />

        <nav style={{ position: 'fixed', width: '100%', padding: '12px 0', display: 'flex', justifyContent: 'center', zIndex: 1000, background: scrolled ? '#010811' : 'rgba(0,0,0,0.8)' }}>
          <div style={{ width: '90%', maxWidth: '1100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={LOGO_IMG} style={{ height: '22px', borderRadius: '4px' }} alt="Logo" />
              <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#60a5fa', letterSpacing: '1px' }}>ASTRASEA</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div className="hidden-mobile" style={{ display: 'flex', gap: '15px' }}>
                 {content.nav.map(n => <span key={n.id} onClick={() => scrollTo(n.id)} style={{ fontSize: '11px', cursor: 'pointer', fontWeight: '600' }}>{n.name}</span>)}
              </div>
              <Globe size={14} onClick={() => setLang(l => l==='CN'?'EN':l==='EN'?'AR':'CN')} style={{ cursor: 'pointer', color: '#60a5fa' }} />
              <div onClick={toggleMusic} style={{ cursor: 'pointer' }}>
                {isMuted ? <VolumeX size={15} /> : <div className="animate-pulse"><Volume2 size={15} color="#60a5fa" /></div>}
              </div>
            </div>
          </div>
        </nav>

        <section id="home" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <video autoPlay loop muted playsInline preload="auto" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
            <source src="/images/v1.mp4" type="video/mp4" />
          </video>
          <div style={{ zIndex: 10, textAlign: 'center', padding: '0 20px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '25px', color: '#60a5fa' }}>
              <MapPin size={18} />
              <span style={{ fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', letterSpacing: '2px' }}>{content.hero.loc}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(24px, 4vw, 50px)', fontWeight: '800', letterSpacing: '4px', color: '#60a5fa', marginBottom: '15px' }}>{content.hero.brand}</h1>
            <h2 style={{ fontSize: 'clamp(22px, 5vw, 60px)', fontWeight: '900', marginBottom: '10px', textShadow: '0 0 20px rgba(0,0,0,0.5)', lineHeight: 1.2 }}>{content.hero.philosophy}</h2>
            <div style={{ fontSize: 'clamp(14px, 2.5vw, 24px)', fontWeight: '300', marginBottom: '15px', color: '#cbd5e1', letterSpacing: '2px' }}>{content.hero.attitude}</div>
            <div style={{ height: '2px', width: '40px', background: '#60a5fa', margin: '20px auto' }}></div>
            <p style={{ fontSize: 'clamp(11px, 1.5vw, 16px)', color: '#fff', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>{content.hero.position}</p>
          </div>
        </section>

        <section id="about" style={{ padding: '80px 8%', background: '#020d1f' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '22px', color: '#60a5fa', marginBottom: '30px' }}>{content.about.title}</h2>
                <div style={{ borderLeft: '4px solid #60a5fa', paddingLeft: '20px', marginBottom: '25px' }}>
                  <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{content.about.founder}</p>
                  <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '6px' }}>{content.about.exp}</p>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#cbd5e1' }}>{content.about.desc}</p>
              </div>
              <div style={{ background: '#0a1f3d', padding: '40px', borderRadius: '25px', textAlign: 'center', border: '1px solid #1e3a8a' }}>
                 <h3 style={{ fontSize: '48px', fontWeight: '900', color: '#60a5fa' }}>800+</h3>
                 <p style={{ fontSize: '14px', color: '#94a3b8' }}>Globally Delivered Vessels</p>
              </div>
            </div>
          </div>
        </section>

        <section id="honors" style={{ padding: '80px 8%', background: '#010811' }}>
          <h2 style={{ textAlign: 'center', fontSize: '22px', marginBottom: '50px' }}>{content.honors.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
            {content.honors.list.map((h, i) => (
              <div key={i} style={{ background: 'rgba(96,165,250,0.03)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(96,165,250,0.1)', textAlign: 'center' }}>
                <Medal color="#60a5fa" size={32} style={{ margin: '0 auto 15px' }} />
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' }}>{h.t}</div>
                <div style={{ fontSize: '10px', color: '#475569' }}>{h.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="products" style={{ padding: '80px 8%', background: '#020d1f' }}>
          <h2 style={{ textAlign: 'center', fontSize: '22px', marginBottom: '50px' }}>{content.products.title}</h2>
          <div style={{ marginBottom: '50px' }}>
            <p style={{ color: '#60a5fa', fontSize: '14px', marginBottom: '20px', fontWeight: 'bold' }}>// {content.products.own}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
              {content.products.itemsOwn.map((p, i) => (
                <div key={i} style={{ background: '#010811', padding: '30px', borderRadius: '20px', border: '1px solid #1e3a8a' }}>
                  <Anchor color="#60a5fa" size={24} style={{ marginBottom: '15px' }} />
                  <h3 style={{ fontSize: '17px', marginBottom: '10px' }}>{p.n}</h3>
                  <p style={{ fontSize: '12px', color: '#64748b' }}>{p.s}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {content.products.itemsExtra.map((p, i) => (
              <div key={i} style={{ background: 'rgba(96,165,250,0.05)', padding: '25px', borderRadius: '15px', border: '1px dashed #60a5fa' }}>
                <div style={{ color: '#60a5fa', marginBottom: '10px' }}>{p.i}</div>
                <h3 style={{ fontSize: '15px', marginBottom: '5px' }}>{p.n}</h3>
                <p style={{ fontSize: '11px', color: '#94a3b8' }}>{p.s}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ padding: '80px 8%', background: '#000' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
              <div>
                <h2 style={{ fontSize: '22px', color: '#60a5fa', marginBottom: '30px' }}>{content.contact.title}</h2>
                <form action="https://formspree.io/f/blackowl0898@gmail.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input name="name" required placeholder={content.contact.pName} style={{ padding: '16px', background: '#0a1f3d', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                  <input name="contact" required placeholder={content.contact.pTel} style={{ padding: '16px', background: '#0a1f3d', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                  <textarea name="message" required placeholder={content.contact.pMsg} rows={4} style={{ padding: '16px', background: '#0a1f3d', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '13px' }}></textarea>
                  <button type="submit" style={{ padding: '16px', background: '#60a5fa', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer' }}>
                    <Send size={18} /> {content.contact.btn}
                  </button>
                </form>
              </div>
              <div style={{ background: '#051937', padding: '40px', borderRadius: '30px', textAlign: 'center', alignSelf: 'center' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '25px' }}>WhatsApp Support</h3>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" style={{ background: '#25D366', color: '#fff', padding: '15px 40px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
                  <MessageCircle size={22} /> CHAT NOW
                </a>
                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '25px' }}>
                  <Youtube color="#FF0000" size={26} /> <Linkedin color="#0077B5" size={26} /> <Instagram color="#E4405F" size={26} /> <Facebook color="#1877F2" size={26} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ padding: '40px', textAlign: 'center', color: '#1e293b', fontSize: '10px', borderTop: '1px solid #0a1f3d' }}>
          © 2024 TIM YIU SING BOATBUILDING (ZHUHAI) CO., LTD. ALL RIGHTS RESERVED.
        </footer>

        <style jsx global>{`
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
          }
        `}</style>
      </div>
    </>
  );
}