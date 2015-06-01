window.VMAddView = Backbone.View.extend({
  events: {
    'click .btncreatevm': 'createvm'
  },
  createvm: function() {

    var vmdetails = {
      'owner': this.model.get('username'),
      'details': {
        'status': 'review',
        'image': $('.img.active').attr('data-img'),
        'ram': parseInt($('.config.active').attr('data-ram'))*1024,
        'disk': $('.config.active').attr('data-hdd'),
        'vcpu': $('.config.active').attr('data-cpu'),
        'hostname': $('.hostname').val(),
        'ip': ['']
      }
    };
    console.log(vmdetails);

    modem('POST', 'vm',
      function(json) {
        console.log(json);
      },
      function(xhr, ajaxOptions, thrownError) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
      }, vmdetails
    );
  },
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    $('.vm-add', this.el).i18n();
    return this;
  }

});