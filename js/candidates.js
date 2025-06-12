function openEditCandidateModal(candidateId) {
    const modal = document.getElementById('editCandidateModal');
    modal.classList.remove('hidden');
    // TODO: Fetch candidate data based on candidateId and populate form
    console.log('Opening edit modal for candidate:', candidateId);
}

function closeEditCandidateModal() {
    const modal = document.getElementById('editCandidateModal');
    modal.classList.add('hidden');
}

function openDeleteCandidateModal(candidateId) {
    const modal = document.getElementById('deleteCandidateModal');
    modal.classList.remove('hidden');
    modal.dataset.candidateId = candidateId;
    console.log('Opening delete modal for candidate:', candidateId);
}

function closeDeleteCandidateModal() {
    const modal = document.getElementById('deleteCandidateModal');
    modal.classList.add('hidden');
}

function deleteCandidate() {
    const modal = document.getElementById('deleteCandidateModal');
    const candidateId = modal.dataset.candidateId;
    // TODO: Add delete logic here
    console.log('Deleting candidate:', candidateId);
    closeDeleteCandidateModal();
}

function openAddCandidateModal() {
    const modal = document.getElementById('addCandidateModal');
    modal.classList.remove('hidden');
}

function closeAddCandidateModal() {
    const modal = document.getElementById('addCandidateModal');
    modal.classList.add('hidden');
}

// Close modals when clicking outside
document.addEventListener('click', (event) => {
    const editModal = document.getElementById('editCandidateModal');
    const deleteModal = document.getElementById('deleteCandidateModal');
    const addModal = document.getElementById('addCandidateModal');
    
    if (event.target === editModal) {
        closeEditCandidateModal();
    }
    if (event.target === deleteModal) {
        closeDeleteCandidateModal();
    }
    if (event.target === addModal) {
        closeAddCandidateModal();
    }
});