// Modal handlers for users page
function openEditModal(userId) {
    const modal = document.getElementById('editModal');
    modal.classList.remove('hidden');
    
    // TODO: Populate form with user data based on userId
    console.log('Opening edit modal for user:', userId);
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.classList.add('hidden');
}

function openDeleteModal(userId) {
    const modal = document.getElementById('deleteModal');
    modal.classList.remove('hidden');
    modal.dataset.userId = userId; // Store userId for delete operation
    console.log('Opening delete modal for user:', userId);
}

function closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    modal.classList.add('hidden');
}

function deleteUser() {
    const modal = document.getElementById('deleteModal');
    const userId = modal.dataset.userId;
    // TODO: Add delete logic here
    console.log('Deleting user:', userId);
    closeDeleteModal();
}

function openAddUserModal() {
    const modal = document.getElementById('addUserModal');
    modal.classList.remove('hidden');
}

function closeAddUserModal() {
    const modal = document.getElementById('addUserModal');
    modal.classList.add('hidden');
}

// Close modals when clicking outside
document.addEventListener('click', (event) => {
    const editModal = document.getElementById('editModal');
    const deleteModal = document.getElementById('deleteModal');
    const addModal = document.getElementById('addUserModal');
    
    if (event.target === editModal) {
        closeEditModal();
    }
    if (event.target === deleteModal) {
        closeDeleteModal();
    }
    if (event.target === addModal) {
        closeAddUserModal();
    }
});

// Prevent modal content clicks from closing the modal
document.querySelectorAll('#editModal .bg-white, #deleteModal .bg-white').forEach(element => {
    element.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});