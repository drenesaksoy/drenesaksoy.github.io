import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ChevronDown,
  CircleDot,
  Stethoscope,
  Heart,
  Shield,
  Smile,
  Baby,
  Star,
  Globe,
  Menu,
  X,
  Zap,
  RefreshCw,
} from 'lucide-react';
import smileBg from '@/assets/close-up-perfect-smile.jpg';
import logo from '@/assets/logo.png';
import doctorPhoto from '@/assets/doctor-enes.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';
import hygieneImage from '@/assets/hygiene-brushing.jpg';

type Language = 'tr' | 'en' | 'ar';

interface Translation {
  [key: string]: {
    tr: string;
    en: string;
    ar: string;
  };
}

const translations: Translation = {
  // Navigation
  home: { tr: 'Ana Sayfa', en: 'Home', ar: 'الرئيسية' },
  about: { tr: 'Hakkımda', en: 'About', ar: 'معلومات عنا' },
  services: { tr: 'Hizmetler', en: 'Services', ar: 'الخدمات' },
  hygiene: { tr: 'Hijyen', en: 'Hygiene', ar: 'النظافة' },
  cases: { tr: 'Vakalar', en: 'Cases', ar: 'الحالات' },
  opinions: { tr: 'Görüşler', en: 'Opinions', ar: 'الآراء' },
  contact: { tr: 'İletişim', en: 'Contact', ar: 'اتصل بنا' },

  // Hero section
  welcomeTitle: {
    tr: 'Dr. Enes Aksoy',
    en: 'Dr. Enes Aksoy',
    ar: 'د. إينيس أقصوي',
  },
  welcomeSubtitle: {
    tr: 'Gülüşünüzün Mimarı - Modern Diş Hekimliği',
    en: 'Architect of Your Smile - Modern Dentistry',
    ar: 'مهندس ابتسامتك - طب الأسنان الحديث',
  },
  whatsapp: { tr: 'WhatsApp', en: 'WhatsApp', ar: 'واتساب' },
  email: { tr: 'E-posta', en: 'Email', ar: 'البريد الإلكتروني' },

  // About section
  aboutTitle: { tr: 'Hakkımda', en: 'About Me', ar: 'معلومات عني' },
  aboutText: {
    tr: "Ben Dr. Enes Aksoy, Ankara Üniversitesi mezunuyum. Şu anda Türkiye'de periodontoloji ve dental implantoloji alanında doktora yapmaktayım. Ana odağım modern, hasta odaklı bakımdır. Genel diş hekimliğini periodontoloji, implantoloji ve biyomimetik diş hekimliğindeki en son tekniklerle birleştirerek minimal invaziv, doğal ve uzun ömürlü tedaviler hedefliyorum. Amacım diş hekimliğini hastalar için daha ulaşılabilir hale getirirken klinikte her gün pratik, yenilikçi çözümler uygulamaktır.",
    en: 'I am Dr. Enes Aksoy, I graduated from Ankara University. Currently I am pursuing a PhD in periodontology and dental implantology in Turkey. My main focus is modern, patient-centered care. I combine general dentistry with the latest techniques in periodontology, implantology, and biomimetic dentistry, aiming for minimally invasive, natural, and long-lasting treatments. My goal is to make dentistry more approachable for patients while applying practical, innovative solutions every day in the clinic.',
    ar: 'أنا د. إينيس أقصوي، تخرجت من جامعة أنقرة. حالياً أقوم بالدكتوراه في أمراض اللثة وزراعة الأسنان في تركيا. تركيزي الأساسي هو الرعاية الحديثة المتمحورة حول المريض. أجمع بين طب الأسنان العام وأحدث التقنيات في أمراض اللثة وزراعة الأسنان وطب الأسنان البيوميميتيكي، بهدف العلاجات طفيفة التوغل والطبيعية وطويلة الأمد. هدفي هو جعل طب الأسنان أكثر سهولة للمرضى مع تطبيق حلول عملية ومبتكرة كل يوم في العيادة.',
  },

  // Services
  servicesTitle: { tr: 'Hizmetlerimiz', en: 'Our Services', ar: 'خدماتنا' },
  filling: { tr: 'Dolgu Tedavisi', en: 'Dental Filling', ar: 'حشو الأسنان' },
  implants: { tr: 'İmplant', en: 'Dental Implants', ar: 'زراعة الأسنان' },
  whitening: { tr: 'Beyazlatma', en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
  rootCanal: { tr: 'Kanal Tedavisi', en: 'Root Canal', ar: 'علاج قناة الجذر' },
  aesthetics: {
    tr: 'Estetik Diş Hekimliği',
    en: 'Aesthetic Dentistry',
    ar: 'طب الأسنان التجميلي',
  },
  periodontal: {
    tr: 'Periodontal Tedavi',
    en: 'Periodontal Treatment',
    ar: 'علاج اللثة',
  },

  // Hygiene Hub
  hygieneTitle: { tr: 'Hijyen Merkezi', en: 'Hygiene Hub', ar: 'مركز النظافة' },
  hygieneDesc: {
    tr: 'Ağız ve diş sağlığınız için önemli bilgiler',
    en: 'Important information for your oral and dental health',
    ar: 'معلومات مهمة لصحة الفم والأسنان',
  },

  // Contact
  contactTitle: { tr: 'İletişim', en: 'Contact', ar: 'اتصل بنا' },
  phone: { tr: 'Telefon', en: 'Phone', ar: 'الهاتف' },
  address: { tr: 'Adres', en: 'Address', ar: 'العنوان' },

  // Form
  leaveReview: { tr: 'Görüş Bırakın', en: 'Leave a Review', ar: 'اترك رأيك' },
  name: { tr: 'İsim', en: 'Name', ar: 'الاسم' },
  message: { tr: 'Mesaj', en: 'Message', ar: 'الرسالة' },
  submit: { tr: 'Gönder', en: 'Submit', ar: 'إرسال' },
};

const DentalClinic = () => {
  const [currentLang, setCurrentLang] = useState<Language>('tr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const t = (key: string) => translations[key]?.[currentLang] || key;

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const services = [
    {
      id: 'filling',
      icon: CircleDot,
      title: t('filling'),
      description: {
        tr: 'Çürük dişlerinizi restore ediyoruz',
        en: 'We restore your decayed teeth',
        ar: 'نعيد ترميم الأسنان المتسوسة',
      },
      details: {
        tr: 'Ne: Çürük nedeniyle hasar gören diş dokusunun temizlenmesi ve yerine uygun materyalle doldurulması işlemidir. Neden: Çürüğün ilerlemesini durdurmak ve dişin fonksiyonunu geri kazandırmak için yapılır. Nasıl: Önce lokal anestezi uygulanır, çürük temizlenir, diş uygun şekilde hazırlanır ve composite veya amalgam dolgu yapılır. Sonrası: İlk 24 saat sert yiyeceklerden kaçının, hafif ağrı olabilir, düzenli diş bakımı yapın.',
        en: 'What: Cleaning damaged tooth tissue due to decay and filling it with appropriate material. Why: To stop decay progression and restore tooth function. How: Local anesthesia is applied first, decay is cleaned, tooth is properly prepared, and composite or amalgam filling is placed. After: Avoid hard foods for 24 hours, mild pain may occur, maintain regular dental care.',
        ar: 'ما هو: تنظيف أنسجة الأسنان التالفة بسبب التسوس وملؤها بمواد مناسبة. لماذا: لوقف تقدم التسوس واستعادة وظيفة السن. كيف: يتم تطبيق التخدير الموضعي أولاً، تنظيف التسوس، تحضير السن بشكل صحيح، ووضع حشوة مركبة أو أملغم. بعدها: تجنب الأطعمة الصلبة لمدة 24 ساعة، قد يحدث ألم خفيف، حافظ على العناية المنتظمة بالأسنان.',
      },
    },
    {
      id: 'implants',
      icon: Shield,
      title: t('implants'),
      description: {
        tr: 'Kayıp dişlerinizi geri kazanın',
        en: 'Regain your lost teeth',
        ar: 'استعد أسنانك المفقودة',
      },
      details: {
        tr: 'Ne: Titanyum vida şeklindeki yapının çene kemiğine yerleştirilmesi ve üzerine protez dişin takılması işlemidir. Neden: Kayıp dişlerin yerine kalıcı çözüm sağlamak için yapılır. Nasıl: Ameliyat öncesi planlama, implantın kemiğe yerleştirilmesi, iyileşme süreci (3-6 ay) ve üst yapının takılması. Sonrası: İlk hafta yumuşak besinler, ağız hijyeni önemli, düzenli kontroller gerekli.',
        en: 'What: Placing a titanium screw-shaped structure into the jawbone and attaching a prosthetic tooth on top. Why: To provide a permanent solution for missing teeth. How: Pre-surgical planning, placing the implant into the bone, healing period (3-6 months), and attachment of the superstructure. After: Soft foods for the first week, oral hygiene is important, regular check-ups are necessary.',
        ar: 'ما هو: وضع هيكل تيتانيوم على شكل برغي في عظم الفك وتثبيت سن صناعي عليه. لماذا: لتوفير حل دائم للأسنان المفقودة. كيف: التخطيط قبل الجراحة، وضع الزرعة في العظم، فترة الشفاء (3-6 أشهر)، وتثبيت البنية العلوية. بعدها: أطعمة لينة للأسبوع الأول، نظافة الفم مهمة، الفحوصات المنتظمة ضرورية.',
      },
    },
    {
      id: 'whitening',
      icon: Smile,
      title: t('whitening'),
      description: {
        tr: 'Beyaz ve parlak dişler',
        en: 'White and bright teeth',
        ar: 'أسنان بيضاء ولامعة',
      },
      details: {
        tr: 'Ne: Dişlerdeki renk değişikliklerinin özel jel ve ışık sistemiyle giderilmesi işlemidir. Neden: Kahve, çay, sigara gibi nedenlerle sararan dişleri beyazlatmak için yapılır. Nasıl: Diş eti korunur, beyazlatma jeli uygulanır, LED ışık aktivasyonu yapılır (45-60 dk). Sonrası: 48 saat boyunca renkli yiyecek-içeceklerden kaçının, dişler geçici olarak hassaslaşabilir.',
        en: 'What: Removing discoloration from teeth using special gel and light systems. Why: To whiten teeth yellowed by coffee, tea, smoking, etc. How: Gums are protected, whitening gel is applied, LED light activation is performed (45-60 min). After: Avoid colored foods and drinks for 48 hours, teeth may temporarily become sensitive.',
        ar: 'ما هو: إزالة تغير لون الأسنان باستخدام جل خاص وأنظمة ضوء. لماذا: لتبييض الأسنان المصفرة بسبب القهوة والشاي والتدخين إلخ. كيف: حماية اللثة، تطبيق جل التبييض، تفعيل ضوء LED (45-60 دقيقة). بعدها: تجنب الأطعمة والمشروبات الملونة لمدة 48 ساعة، قد تصبح الأسنان حساسة مؤقتاً.',
      },
    },
    {
      id: 'rootcanal',
      icon: Heart,
      title: t('rootCanal'),
      description: {
        tr: 'Dişinizi kurtarın',
        en: 'Save your tooth',
        ar: 'أنقذ أسنانك',
      },
      details: {
        tr: 'Ne: Dişin içindeki enfekte pulpanın temizlenmesi ve kanalların doldurulması işlemidir. Neden: İleri çürük veya travma nedeniyle hasar gören diş pulpasını tedavi etmek için yapılır. Nasıl: Lokal anestezi, pulpa odası açılır, kanallar temizlenir, şekillendirilir ve doldurulur (1-3 seans). Sonrası: Kanal tedavisi sonrası diş kırılgandır, üst dolgu veya kuron gerekebilir, hafif ağrı normaldir.',
        en: 'What: Cleaning infected pulp inside the tooth and filling the canals. Why: To treat damaged tooth pulp due to advanced decay or trauma. How: Local anesthesia, pulp chamber is opened, canals are cleaned, shaped, and filled (1-3 sessions). After: Tooth is fragile after root canal treatment, top filling or crown may be needed, mild pain is normal.',
        ar: 'ما هو: تنظيف اللب المصاب داخل السن وملء القنوات. لماذا: لعلاج لب السن التالف بسبب التسوس المتقدم أو الصدمة. كيف: التخدير الموضعي، فتح غرفة اللب، تنظيف القنوات وتشكيلها وملؤها (1-3 جلسات). بعدها: السن هش بعد علاج القناة، قد تحتاج حشوة علوية أو تاج، الألم الخفيف طبيعي.',
      },
    },
    {
      id: 'aesthetics',
      icon: Star,
      title: t('aesthetics'),
      description: {
        tr: 'Güzel gülüşler için estetik çözümler',
        en: 'Aesthetic solutions for beautiful smiles',
        ar: 'حلول جمالية للابتسامات الجميلة',
      },
      details: {
        tr: 'Ne: Dişlerin şekil, renk ve diziliminin iyileştirilmesi için yapılan estetik uygulamalardır. Neden: Gülüş estetiğini artırmak ve kişinin özgüvenini yükseltmek için yapılır. Nasıl: Porselen laminatlar, kompozit bonding, diş eti şekillendirmesi, ortodontik tedaviler uygulanır. Sonrası: Yeni gülüşünüz ile özgüveniniz artacak, düzenli bakım ile uzun yıllar dayanır.',
        en: 'What: Aesthetic applications to improve the shape, color, and alignment of teeth. Why: To enhance smile aesthetics and boost personal confidence. How: Porcelain veneers, composite bonding, gum contouring, orthodontic treatments are applied. After: Your confidence will increase with your new smile, lasts for many years with regular care.',
        ar: 'ما هو: تطبيقات جمالية لتحسين شكل ولون ومحاذاة الأسنان. لماذا: لتعزيز جماليات الابتسامة وزيادة الثقة الشخصية. كيف: يتم تطبيق قشور البورسلين، والربط المركب، وتحديد اللثة، والعلاجات التقويمية. بعدها: ستزداد ثقتك بابتسامتك الجديدة، تدوم لسنوات عديدة مع العناية المنتظمة.',
      },
    },
    {
      id: 'periodontal',
      icon: Stethoscope,
      title: t('periodontal'),
      description: {
        tr: 'Diş eti sağlığı',
        en: 'Gum health',
        ar: 'صحة اللثة',
      },
      details: {
        tr: 'Ne: Diş eti ve diş çevresindeki dokuların hastalıklarının tedavisidir. Neden: Gingivitis ve periodontitis gibi diş eti hastalıklarını tedavi etmek için yapılır. Nasıl: Diş taşı temizliği, kök düzeltmesi, cerrahi müdahaleler ve bakım uygulanır. Sonrası: Ağız hijyeni kritik, düzenli kontroller şart, diş eti kanaması durmalı.',
        en: 'What: Treatment of diseases of the gums and tissues around the teeth. Why: To treat gum diseases such as gingivitis and periodontitis. How: Tartar cleaning, root planing, surgical interventions, and maintenance are applied. After: Oral hygiene is critical, regular check-ups are essential, gum bleeding should stop.',
        ar: 'ما هو: علاج أمراض اللثة والأنسجة المحيطة بالأسنان. لماذا: لعلاج أمراض اللثة مثل التهاب اللثة والتهاب دواعم السن. كيف: تنظيف الجير، تسوية الجذور، التدخلات الجراحية، والصيانة. بعدها: نظافة الفم أمر بالغ الأهمية، الفحوصات المنتظمة ضرورية، يجب أن يتوقف نزيف اللثة.',
      },
    },
  ];

  const testimonials = [
    {
      name: 'Ayşe Kaya',
      text: 'Harika bir deneyimdi, çok memnun kaldım!',
      rating: 5,
    },
    {
      name: 'Mehmet Demir',
      text: 'Profesyonel hizmet, kesinlikle tavsiye ederim.',
      rating: 5,
    },
    {
      name: 'Fatma Özkan',
      text: 'Çok nazik ve anlayışlı bir doktor.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Dr. Enes Aksoy Logo" className="h-10 w-10" />
              <div className="text-2xl font-bold text-primary">
                Dr. Enes Aksoy
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {['home', 'about', 'services', 'hygiene', 'cases', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {t(section)}
                  </button>
                )
              )}
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {['tr', 'en', 'ar'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang as Language)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-smooth ${
                      currentLang === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary-accent'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-foreground hover:text-primary transition-smooth"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 py-4 border-t">
              <div className="flex flex-col space-y-4">
                {[
                  'home',
                  'about',
                  'services',
                  'hygiene',
                  'cases',
                  'contact',
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {t(section)}
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${smileBg})` }}
        />
        <div className="absolute inset-0 bg-background/20" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={doctorPhoto}
                alt="Dr. Enes Aksoy"
                className="w-48 h-48 mx-auto mb-6 object-cover rounded-full border-4 border-primary/20 shadow-luxury"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 transition-bounce">
              {t('welcomeTitle')}
            </h1>

            <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
              {t('welcomeSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp-dark))] text-white hover:shadow-luxury transition-luxury px-8 py-4 text-lg font-semibold"
                onClick={() =>
                  window.open('https://wa.me/905411543686', '_blank')
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('whatsapp')}
              </Button>

              <Button
                size="lg"
                className="bg-[hsl(var(--instagram))] hover:bg-[hsl(var(--instagram-dark))] text-white transition-luxury px-8 py-4 text-lg font-semibold"
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/drenesaksoy/',
                    '_blank'
                  )
                }
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg font-semibold transition-luxury"
                onClick={() =>
                  window.open('mailto:info@drenesaksoy.com', '_blank')
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('email')}
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <span>•</span>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
              {t('aboutTitle')}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={clinicInterior}
                  alt="Clinic Interior"
                  className="w-full h-96 object-cover rounded-2xl shadow-card"
                />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed text-justify">
                  {t('aboutText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <span>•</span>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 pt-40 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
              {t('servicesTitle')}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                const isExpanded = expandedService === service.id;

                return (
                  <Card
                    key={service.id}
                    className={`medical-card cursor-pointer transition-luxury duration-500 overflow-hidden ${
                      isExpanded
                        ? 'ring-2 ring-primary/20 shadow-luxury'
                        : 'hover:scale-105'
                    }`}
                    onClick={() =>
                      setExpandedService(isExpanded ? null : service.id)
                    }
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-full transition-luxury ${
                              isExpanded
                                ? 'bg-primary text-primary-foreground shadow-luxury'
                                : 'bg-primary/10'
                            }`}
                          >
                            <IconComponent
                              className={`h-8 w-8 transition-luxury ${
                                isExpanded
                                  ? 'text-primary-foreground scale-110'
                                  : 'text-primary'
                              }`}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {service.title}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-primary transition-luxury duration-300 ${
                            isExpanded ? 'rotate-180 scale-110' : ''
                          }`}
                        />
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {service.description[currentLang]}
                      </p>

                      <div
                        className={`transition-all duration-500 ease-out overflow-hidden ${
                          isExpanded
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="border-t pt-4">
                          <p className="text-foreground leading-relaxed">
                            {service.details[currentLang]}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <span>•</span>
      </div>

      {/* Hygiene Hub Section */}
      <section id="hygiene" className="py-20 pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">
              {t('hygieneTitle')}
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              {t('hygieneDesc')}
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={hygieneImage}
                  alt="Dental Hygiene"
                  className="w-full h-96 object-cover rounded-2xl shadow-card"
                />
              </div>

              <div className="space-y-8">
                <Card className="medical-card p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Günlük Diş Bakımı
                    </h3>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Günde 2 kez</strong> fluorürlü diş macunu ile
                          en az 2 dakika fırçalayın
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Diş ipi</strong> kullanarak dişleriniz
                          arasındaki plakları temizleyin
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Antibakteriyel gargara</strong> ile ağzınızı
                          çalkalayın
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>6 ayda bir</strong> diş hekimi kontrolü
                          yaptırın
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="medical-card p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <RefreshCw className="h-5 w-5" />
                      Beslenme ve Yaşam Tarzı
                    </h3>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Şekerli ve asitli</strong> yiyecekleri
                          sınırlayın
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Günde 8-10 bardak su</strong> tüketerek
                          ağzınızı nemli tutun
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Kalsiyum ve vitamin D</strong> açısından
                          zengin besinler tüketin
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Sigara ve alkol</strong> tüketiminden kaçının
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="medical-card p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Diş Fırçası Seçimi
                    </h3>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Elektrikli fırça:</strong> Daha etkili plak
                          temizliği, zamanlayıcı özelliği
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Manuel fırça:</strong> Yumuşak kıllar, küçük
                          başlık tercih edin
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>3 ayda bir</strong> diş fırçanızı değiştirin
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong>Doğru teknik:</strong> Dairesel hareketlerle
                          nazikçe fırçalayın
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider">
        <span>•</span>
      </div>

      {/* Cases Section */}
      <section id="cases" className="py-20 pt-40 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
              {t('cases')}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((caseNum) => (
                <Card key={caseNum} className="medical-card overflow-hidden">
                  <div className="h-48 bg-gradient-primary" />
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-primary/10 text-primary">
                      Vaka {caseNum}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      İmplant Tedavisi
                    </h3>
                    <p className="text-muted-foreground">
                      Hasta çok memnun kaldı ve doğal görünüm elde edildi.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 pt-40 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
              {t('contactTitle')}
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="medical-card text-center">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-lg">
                      {t('phone')}
                    </h3>
                    <a
                      href="tel:+905411543686"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +90 541 154 36 86
                    </a>
                  </CardContent>
                </Card>

                <Card className="medical-card text-center">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-lg">
                      {t('email')}
                    </h3>
                    <a
                      href="mailto:info@drenesaksoy.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      info@drenesaksoy.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="medical-card text-center">
                  <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-3 text-lg">
                      {t('address')}
                    </h3>
                    <div className="space-y-2 text-center">
                      <p className="text-muted-foreground text-sm">
                        Başakşehir İstanbul
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Fatih İstanbul
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Dr. Enes Aksoy</h3>
            <p className="text-primary-light mb-6">
              Gülüşünüzün Mimarı - Modern Diş Hekimliği
            </p>
            <div className="flex justify-center gap-6 mb-4">
              <a
                href="tel:+905411543686"
                className="hover:text-primary-light transition-smooth"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:info@drenesaksoy.com"
                className="hover:text-primary-light transition-smooth"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/905411543686"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-smooth"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/drenesaksoy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-smooth"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-light">
              Başakşehir & Fatih, İstanbul
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp-dark))] text-white shadow-luxury hover:shadow-luxury hover:scale-110 transition-luxury float-animation rounded-full w-16 h-16 p-0"
          onClick={() => window.open('https://wa.me/905411543686', '_blank')}
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    </div>
  );
};

export default DentalClinic;
