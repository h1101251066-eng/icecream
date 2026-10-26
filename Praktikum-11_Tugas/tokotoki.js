$(function () {

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $.fx.off = true;
  }

  $('.hero-isi').hide().fadeIn(1200);

  function scrollKe(selector) {
    $('html, body').animate({ scrollTop: $(selector).offset().top }, 700);
  }
  $('a.scroll').on('click', function (e) {
    e.preventDefault();
    scrollKe(this.hash);
  });

  $('#tombol-info').on('click', function () {
    $('#info-kirim').slideToggle(400);
  });


  $('.tab-panel').hide().first().show();   

  $('.tab-btn').on('click', function () {
    $('.tab-btn').removeClass('aktif');
    $(this).addClass('aktif');

    $('.tab-panel').hide();
    $('#' + $(this).data('tab')).fadeIn(400);
  });

  $('.btn-pesan').on('click', function () {
    $('#model').val($(this).data('nama')).valid();
    scrollKe('#pesan');
  });


  $('#form-pesan').validate({
    rules: {
      nama:    { required: true, minlength: 3 },
      email:   { required: true, email: true },
      telepon: { required: true, digits: true, minlength: 10, maxlength: 13 },
      model:   { required: true },
      ukuran:  { required: true },
      jumlah:  { required: true, digits: true, min: 1, max: 10 },
      alamat:  { required: true, minlength: 10 },
      bayar:   { required: true },
      setuju:  { required: true }
    },
    messages: {
      nama:    { required: 'Nama wajib diisi.', minlength: 'Nama minimal 3 huruf.' },
      email:   { required: 'Email wajib diisi.', email: 'Format email belum benar, contoh: nama@email.com.' },
      telepon: {
        required: 'Nomor WhatsApp wajib diisi.',
        digits: 'Isi dengan angka saja.',
        minlength: 'Nomor minimal 10 angka.',
        maxlength: 'Nomor maksimal 13 angka.'
      },
      model:   { required: 'Isi model yang ingin dipesan.' },
      ukuran:  { required: 'Pilih ukuran sepatu.' },
      jumlah:  {
        required: 'Jumlah wajib diisi.',
        digits: 'Isi dengan angka bulat.',
        min: 'Jumlah minimal 1 pasang.',
        max: 'Jumlah maksimal 10 pasang.'
      },
      alamat:  { required: 'Alamat wajib diisi.', minlength: 'Alamat minimal 10 karakter.' },
      bayar:   { required: 'Pilih metode pembayaran.' },
      setuju:  { required: 'Centang dulu untuk melanjutkan.' }
    },
    errorElement: 'small',
    errorPlacement: function (error, element) {
      if (element.is(':radio, :checkbox')) {
        error.insertAfter(element.closest('.grup'));
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function (form) {
      // form menutup, pesan sukses muncul
      $(form).slideUp(500, function () {
        $('#sukses').fadeIn(500);
      });
    }
  });

});