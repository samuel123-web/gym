import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Award, Dumbbell, Target, Users, Clock, TrendingUp } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { StatsCounter } from '../components/StatsCounter';
import { ProgramCard } from '../components/ProgramCard';
import { TrainerCard } from '../components/TrainerCard';
import { PricingCard } from '../components/PricingCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQAccordion } from '../components/FAQAccordion';

import { siteConfig } from '../data/siteData';
import { programsData } from '../data/programsData';
import { trainersData } from '../data/trainersData';
import { pricingData } from '../data/pricingData';
import { testimonialsData } from '../data/testimonialsData';
import { faqData } from '../data/faqData';
import { galleryItems } from '../data/galleryData';
import { scheduleData } from '../data/scheduleData';

export function HomePage({ currentLang = 'am', onOpenJoinModal, onSelectProgram, onSelectTrainer, onSelectGalleryItem }) {
  const navigate = useNavigate();
  const [activeDayIndex, setActiveDayIndex] = React.useState(0);
  const isAmharic = currentLang === 'am';

  const t = siteConfig.i18n[currentLang] || siteConfig.i18n.am;
  const currentSchedule = scheduleData[activeDayIndex] || scheduleData[0];

  const iconMap = {
    Award: Award,
    Dumbbell: Dumbbell,
    Target: Target,
    Users: Users,
    Clock: Clock,
    TrendingUp: TrendingUp
  };

  const formattedStats = siteConfig.stats.map((s) => ({
    value: s.value,
    suffix: s.suffix,
    label: isAmharic ? s.labelAm : s.labelEn
  }));

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <img
          src="/assets/hero_bg.jpg"
          alt="IronForge Gym Background"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>

        <div className="hero-content animate-fade-in-up">
          <div className="section-badge">
            <span>{isAmharic ? siteConfig.heroLabelAmharic : siteConfig.heroLabel}</span>
          </div>

          <h1 className="hero-headline">
            {isAmharic ? (
              <>ጠንካራ ማንነትዎን <span>ይገንቡ።</span></>
            ) : (
              <>BUILD YOUR <span>STRONGEST SELF.</span></>
            )}
          </h1>

          <p className="hero-subtitle">
            {isAmharic ? siteConfig.heroSubtitleAmharic : siteConfig.heroSubtitle}
          </p>

          <div className="hero-cta-group">
            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={() => onOpenJoinModal(t.startJourney)}
              style={{ padding: '1.1rem 2.25rem', fontSize: '1rem' }}
            >
              {t.startJourney}
            </Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/programs')}
              style={{ padding: '1.1rem 2.25rem', fontSize: '1rem' }}
            >
              {t.explorePrograms}
            </Button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>{isAmharic ? 'ወደ ታች ይሸብልሉ' : 'SCROLL DOWN'}</span>
        </div>
      </section>

      {/* 2. HERO STATISTICS BAR */}
      <StatsCounter stats={formattedStats} />

      {/* 3. ABOUT SECTION (Asymmetric) */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img
                src="/assets/about_gym.jpg"
                alt="IronForge Gym Facility"
                className="about-image"
                loading="lazy"
              />
            </div>

            <div>
              <SectionHeading
                badge={isAmharic ? "አላማ እና ባህል" : "PHILOSOPHY & CULTURE"}
                title={isAmharic ? "ከጂም በላይ። ደረጃ!" : "MORE THAN A GYM. A STANDARD."}
              />
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                {isAmharic
                  ? "እኛ ፍስነስ የጊዚያዊ ስሜት ጉዳይ አይደለም ብለን እናምናለን። ይልቁንም ዲሲፕሊንን፣ በራስ መተማመንን፣ ጥንካሬን እና ዘላቂ የህይወት ዘይቤን የመገንባት ሂደት ነው።"
                  : "We believe fitness is not about temporary motivation. It's about building discipline, confidence, strength, and a lifestyle that lasts."
                }
              </p>
              
              <div className="philosophy-card">
                <p style={{ color: 'var(--text-main)', fontStyle: 'italic', fontWeight: 500 }}>
                  {isAmharic
                    ? '"በአይረንፎርጅ እያንዳንዱ እንቅስቃሴ ለአካላዊና አእምሯዊ ጥንካሬዎ የሚደረግ ኢንቨስትመንት ነው። እኛ ጊዜያዊ መፍትሔ አንሰጥም - አስተማማኝ መሰረት እንገነባለን።"'
                    : '"At IronForge, every rep is an investment in your physical resilience. We don\'t deal in quick fixes—we build unbreakable foundations."'
                  }
                </p>
              </div>

              <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
                {isAmharic
                  ? "በቦሌ አዲስ አበባ የሚገኘው ዘመናዊ ማዕከላችን የላቁ የጥንካሬ መሣሪያዎችን፣ የካርዲዮ ክፍሎችን እና የሳውና እረፍትን በአንድ ላይ ያቀናጀ ነው።"
                  : "Located in Addis Ababa, our facility combines elite powerlifting gear, metabolic conditioning rigs, and luxury recovery amenities so you never have to settle."
                }
              </p>

              <Button
                variant="outline"
                icon={ChevronRight}
                onClick={() => navigate('/about')}
              >
                {t.ourStory}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS SECTION */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "የስልጠና ዘርፎች" : "TRAINING DISCIPLINES"}
            title={isAmharic ? "በዓላማ ይሠልጥኑ።" : "TRAIN WITH PURPOSE."}
            subtitle={isAmharic ? "ለእርስዎ ፍላጎት እና ደረጃ ተስማሚ የሆኑ የስልጠና ፕሮግራሞቻችንን ይመልከቱ።" : "Explore our targeted fitness programs designed for every stage of your athletic evolution."}
            center
          />

          <div className="programs-grid">
            {programsData.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
                currentLang={currentLang}
                onSelectProgram={onSelectProgram}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={() => navigate('/programs')}
            >
              {isAmharic ? "ሁሉንም ፕሮግራሞች ይመልከቱ" : "VIEW ALL PROGRAM DETAILS"}
            </Button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "የአይረንፎርጅ ብልጫ" : "THE IRONFORGE ADVANTAGE"}
            title={t.whyUsTitle}
            subtitle={isAmharic ? "ለእውነተኛ ለውጥ፣ ለላቀ የጂም መንፈስ እና ደረጃቸውን ለጠበቁ መሣሪያዎች የተገነባ።" : "Built from the ground up for serious progress, unmatched atmosphere, and luxury standards."}
            center
          />

          <div className="responsive-grid-3">
            {siteConfig.whyChooseUs.map((feature, idx) => {
              const IconComp = iconMap[feature.icon] || Dumbbell;
              return (
                <div key={idx} className="card" style={{ padding: '2rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-orange-dim)',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    color: 'var(--accent-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComp size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    {isAmharic ? feature.titleAm : feature.titleEn}
                  </h3>
                  <p style={{ fontSize: '0.95rem' }}>
                    {isAmharic ? feature.descAm : feature.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TRAINERS SECTION */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "ባለሙያ አሰልጣኞች" : "MASTER COACHES"}
            title={t.meetCoaches}
            subtitle={isAmharic ? "በተመሰከረላቸው የስፖርት ሳይንስ እና የጥንካሬ አሰልጣኞች የሚሰጥ ስልጠና።" : "Guided by certified strength specialists, athletic trainers, and nutrition experts."}
            center
          />

          <div className="trainers-grid">
            {trainersData.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                currentLang={currentLang}
                onSelectTrainer={onSelectTrainer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEMBERSHIP SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "ግልጽ የአባልነት ዋጋ" : "TRANSPARENT PRICING"}
            title={t.chooseLevel}
            subtitle={isAmharic ? "ምንም አይነት የተሸሸገ ክፍያ የሌለው። ለእርስዎ የሚስማማውን አባልነት ይምረጡ።" : "Flexible options with zero hidden fees. Select the membership that matches your drive."}
            center
          />

          <div className="responsive-grid-3" style={{ alignItems: 'stretch' }}>
            {pricingData.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle="monthly"
                currentLang={currentLang}
                onSelectPlan={() => onOpenJoinModal(`Membership Plan: ${isAmharic ? plan.nameAm : plan.nameEn}`)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button variant="outline" onClick={() => navigate('/membership')}>
              {isAmharic ? "የአባልነቶችን ሙሉ ዝርዝር እና ማነጻጸሪያ ይመልከቱ" : "COMPARE ALL PLAN DETAILS & COMPARISON MATRIX"}
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FREE TRIAL FULL-WIDTH CTA */}
      <section className="cta-banner-section">
        <img src="/assets/hero_bg.jpg" alt="Trial Pass" className="cta-banner-bg" />
        <div className="container">
          <div className="cta-banner-content">
            <div className="section-badge" style={{ marginBottom: '1rem' }}>
              {isAmharic ? "ነፃ የመሞከሪያ ፓስ" : "FREE PASS EXPERIENCE"}
            </div>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
              {isAmharic ? "በለጠ ጠንካራ ለመሆን ዝግጁ ኖት?" : "READY TO BECOME STRONGER?"}
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#D4D4D8', marginBottom: '2rem' }}>
              {isAmharic
                ? "በነፃ የ7 ቀን የሙከራ ፓስ ይጀምሩ እና የአይረንፎርጅን ልዩነት በነፃ ይለማመዱ።"
                : "Start with a free 7-day trial pass and experience the IronForge difference with zero risk."
              }
            </p>
            <Button
              variant="primary"
              icon={ArrowRight}
              onClick={() => onOpenJoinModal(t.freeTrial)}
              style={{ padding: '1.1rem 2.5rem', fontSize: '1.05rem' }}
            >
              {t.freeTrial}
            </Button>
          </div>
        </div>
      </section>

      {/* 9. RESULTS & TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "የአባላት ምስክርነት" : "MEMBER STORIES"}
            title={t.realProgress}
            subtitle={isAmharic ? "አባሎቻችን በአይረንፎርጅ ያገኙትን እውነተኛ ለውጥ ይመልከቱ።" : "See how everyday athletes and busy professionals transformed their consistency at IronForge."}
            center
          />

          <div className="responsive-grid-2">
            {testimonialsData.map((testim) => (
              <TestimonialCard key={testim.id} testimonial={testim} currentLang={currentLang} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. WEEKLY CLASS SCHEDULE SNIPPET */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "የጊዜ ሰሌዳ" : "TIMETABLE"}
            title={t.scheduleTitle}
            subtitle={isAmharic ? "በጠዋት ወይም በምሽት ክፍሎቻችን ቦታዎን አሁኑኑ ያስይዙ።" : "Reserve your slot in our high-energy morning or peak evening sessions."}
            center
          />

          <div className="schedule-tabs">
            {scheduleData.map((s, idx) => (
              <button
                key={idx}
                className={`day-tab-btn ${activeDayIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveDayIndex(idx)}
              >
                {isAmharic ? s.dayAm : s.dayEn}
              </button>
            ))}
          </div>

          <div className="schedule-list">
            {currentSchedule.classes.map((cls) => (
              <div key={cls.id} className="schedule-item">
                <div className="schedule-item-content" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <span className="schedule-time">{isAmharic ? cls.timeAm : cls.timeEn}</span>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>
                      {isAmharic ? cls.nameAm : cls.nameEn}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {isAmharic ? "አሰልጣኝ፡" : "Coach:"} <strong>{isAmharic ? cls.trainerAm : cls.trainerEn}</strong> • {isAmharic ? "ክፍል፡" : "Room:"} {isAmharic ? cls.roomAm : cls.roomEn} ({isAmharic ? cls.durationAm : cls.durationEn})
                    </span>
                  </div>
                </div>

                <div className="schedule-item-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
                    {cls.spotsLeft} {isAmharic ? "ቦታዎች ቀርተዋል" : "spots left"}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => onOpenJoinModal(`${t.bookClass}: ${isAmharic ? cls.nameAm : cls.nameEn}`)}
                    style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                  >
                    {t.bookClass}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 11. GALLERY MASONRY PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "የጂም ጉብኝት" : "FACILITY TOUR"}
            title={t.galleryTitle}
            subtitle={isAmharic ? "በአዲስ አበባ የሚገኘውን ዘመናዊ የጂም ክፍላችንን ይጎብኙ።" : "Step inside our state-of-the-art facility in Addis Ababa."}
            center
          />

          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => onSelectGalleryItem(item)}
              >
                <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-hover-overlay">
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Button variant="secondary" onClick={() => navigate('/gallery')}>
              {isAmharic ? "ሙሉ ጋለሪውን ይመልከቱ" : "EXPLORE FULL GALLERY"}
            </Button>
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            badge={isAmharic ? "ተደጋግመው የሚጠየቁ ጥያቄዎች" : "FREQUENTLY ASKED QUESTIONS"}
            title={t.faqTitle}
            subtitle={isAmharic ? "ከመመዝገብዎ በፊት ማወቅ የሚፈልጓቸው ነገሮች ካሉ እዚህ ያገኛሉ።" : "Have questions before joining? Here are quick answers to common queries."}
            center
          />

          <FAQAccordion items={faqData} currentLang={currentLang} />
        </div>
      </section>
    </div>
  );
}
