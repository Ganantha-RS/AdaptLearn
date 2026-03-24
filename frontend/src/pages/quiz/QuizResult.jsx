import React from 'react';

const QuizResult = () => {
  const styles = {
    mainWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '20px'
    },
    topLabel: {
      color: '#7f8c8d',
      fontSize: '14px',
      marginBottom: '15px',
      fontWeight: '500'
    },
    outerBorder: {
      backgroundColor: '#ffffff',
      padding: '20px',
      border: '2px solid #3498db', 
      borderRadius: '4px',
      width: '100%',
      maxWidth: '360px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    innerDashedBox: {
      border: '1px dashed #bdc3c7', 
      padding: '30px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    // INI BAGIAN YANG DI-DESAIN ULANG (TETAP ORANYE):
    analysisText: {
      backgroundColor: '#fff3e0', // Oranye sangat muda (peach) untuk background
      color: '#e67e22',           // Oranye tua (sesuai kode asli kamu) untuk teks
      padding: '6px 20px',
      borderRadius: '50px',       // Biar bentuknya kapsul modern
      fontSize: '11px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      marginBottom: '20px',
      border: '1px solid #ffe0b2', // Garis pinggir tipis biar makin rapi
      display: 'inline-block'
    },
    icon: {
      fontSize: '30px',
      marginBottom: '10px'
    },
    mainTitle: {
      fontSize: '26px',
      color: '#2c3e50',
      margin: '0',
      fontWeight: 'bold'
    },
    levelText: {
      color: '#95a5a6',
      fontSize: '14px',
      marginTop: '5px',
      marginBottom: '25px'
    },
    description: {
      fontSize: '13px',
      color: '#7f8c8d',
      lineHeight: '1.6',
      marginBottom: '30px'
    },
    btnPrimary: {
      backgroundColor: '#f39c12',
      color: 'white',
      border: 'none',
      padding: '14px 20px',
      width: '100%',
      borderRadius: '10px',
      fontWeight: 'bold',
      fontSize: '12px',
      cursor: 'pointer',
      marginBottom: '15px'
    },
    btnRetry: {
      background: 'none',
      border: 'none',
      color: '#bdc3c7',
      fontSize: '11px',
      letterSpacing: '1px',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'uppercase'
    }
  };

  return (
    <div style={styles.mainWrapper}>
      <p style={styles.topLabel}>Quiz Result - Text Enjoyer</p>
      
      <div style={styles.outerBorder}>
        <div style={styles.innerDashedBox}>
          {/* Bagian yang didesain ulang jadi kapsul oranye */}
          <span style={styles.analysisText}>HASIL ANALISA</span>
          
          <div style={styles.icon}>📄</div>
          
          <h1 style={styles.mainTitle}>Text Enjoyer</h1>
          <p style={styles.levelText}>Beginner Level</p>

          <p style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas vel metus efficitur ex tincidunt gravida tristique vitae velit. 
            In vitae lacus elementum, varius ipsum in, tincidunt augue.
          </p>

          <button 
            style={styles.btnPrimary}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            LIHAT REKOMENDASI MATERI
          </button>
          
          <button style={styles.btnRetry}>
            ULANGI KUIS
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;