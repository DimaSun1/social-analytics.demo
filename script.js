// Simulare date pentru grafic
const engagementData = {
    labels: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'],
    datasets: [{
        label: 'Engagement (Like-uri și Comentarii)',
        data: [150, 200, 180, 210, 250, 300, 280],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Creare grafic
const ctx = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(ctx, {
    type: 'line',
    data: engagementData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Generare PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Raport Analiza Social Media", 20, 20);
    doc.text("Datele sunt bazate pe un cont fictiv.", 20, 30);
    doc.text("Cele mai bune postări:", 20, 40);

    const postari = [
        ['Postare 1', '200', '50'],
        ['Postare 2', '150', '30'],
        ['Postare 3', '180', '40']
    ];

    doc.autoTable({
        head: [['Postare', 'Like-uri', 'Comentarii']],
        body: postari,
        startY: 50
    });

    doc.save("raport_social_media.pdf");
}
