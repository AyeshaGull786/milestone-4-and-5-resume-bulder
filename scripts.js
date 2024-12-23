// Make sections editable and save changes locally
const editableElements = document.querySelectorAll('.editable');

editableElements.forEach(element => {
  element.addEventListener('blur', () => {
    const sectionId = element.id;
    const updatedContent = element.innerText.trim();

    // Save the updated content locally
    console.log(`Saving changes for ${sectionId}: ${updatedContent}`);
    localStorage.setItem(sectionId, updatedContent);
  });

  // Load saved content on page load
  const savedContent = localStorage.getItem(element.id);
  if (savedContent) {
    element.innerText = savedContent;
  }
});

// Shareable Link
document.getElementById('share-link').addEventListener('click', () => {
  const username = 'your-username'; // Replace with dynamic username
  const link = `https://${username}.vercel.app/resume`;
  navigator.clipboard.writeText(link).then(() => {
    alert(`Link copied to clipboard: ${link}`);
  });
});

// Download as PDF
document.getElementById('download-pdf').addEventListener('click', () => {
  const element = document.getElementById('resume'); // Resume container
  html2pdf(element, {
    margin: 1,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  });
});
