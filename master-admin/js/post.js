 window.addEventListener("DOMContentLoaded", (event) => {
     const datatablesSimple = document.getElementById("post-data");
     if (datatablesSimple) {
         new simpleDatatables.DataTable(datatablesSimple);
     }
 });
 $(document).ready(function() {
     $('#previewButton').on('click', function() {
         // Get the content from the input field with id 'contentData'
         var content = $('#contentData').val();

         // Set the content inside the modal body with id 'previewContainer'
         $('#previewContainer').html(content);

         // Show the modal
         var previewModal = new bootstrap.Modal(document.getElementById('previewModal'));
         previewModal.show();
     });
     $('.editBtn').on('click', function() {
         var link = $(this).attr('href');
         // alert('link is : '+link);
         // Show the modal
         var updatePostMdl = new bootstrap.Modal(document.getElementById('addPostModal'));
         updatePostMdl.show();
         event.preventDefault();
     });

 });
 $(document).ready(function() {
     $('.delBtn').on('click', function(event) {
         // Prevent the default action of the button (if needed)
         event.preventDefault();
         // Show a success toast
         iziToast.error({
             title: 'Faild',
             message: 'This is a custom toast notification!',
             position: 'topRight',
             timeout: 3000
         });
     });
 });