var Login = function () {

    var handleLogin = function() {
        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                email: {
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
            },

            messages: {
                username: {
                    required: "Email is required."
                },
                password: {
                    required: "Password is required."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                $('.alert-danger', $('.login-form')).show();
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.login-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit();
                }
                return false;
            }
        });
    }

    var handleForgetPassword = function () {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },

            messages: {
                email: {
                    required: "Email is required."
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.forget-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        // jQuery('#forget-password').click(function () {
        //     jQuery('.login-form').hide();
        //     jQuery('.forget-form').show();
        // });
        //
        // jQuery('#back-btn').click(function () {
        //     jQuery('.login-form').show();
        //     jQuery('.forget-form').hide();
        // });

    }

    jQuery.validator.addMethod("zipcode", function(value, element) {
        return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
    }, "Please provide a valid zipcode.");

    var handleRegister = function () {

        $('.create-club-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                club_name: {
                    required: true
                },
                club_slug: {
                    required: true
                },
                club_description: {
                    required: true
                },
                club_short_description: {
                    required: true
                },
                club_url: {
                    url: true
                },
                membership_limit: {
                    number: true
                },
                club_zipcode: {
                    required: true,
                    zipcode: true
                },
                club_type: {
                    required: true
                },
                club_phone: {
                    phoneUS:true
                },
            },

            messages: { // custom messages for radio buttons and checkboxes
            },

            invalidHandler: function (event, validator) { //display error alert on form submit

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.create-club-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.create-club-form').validate().form()) {
                    $('.create-club-form').submit();
                }
                return false;
            }
        });

        // jQuery('#register-btn').click(function () {
        //     jQuery('.login-form').hide();
        //     jQuery('.register-form').show();
        // });
        //
        // jQuery('#register-back-btn').click(function () {
        //     jQuery('.login-form').show();
        //     jQuery('.register-form').hide();
        // });
    }

    var handleUpdateMessage = function () {

        $('.message-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {

                club_message: {
                    required: true
                },
                club_renewal_message: {
                    required: true
                }
            },


            invalidHandler: function (event, validator) { //display error alert on form submit

            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },

            errorPlacement: function (error, element) {
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

        $('.message-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.message-form').validate().form()) {
                    $('.message-form').submit();
                }
                return false;
            }
        });

        // jQuery('#register-btn').click(function () {
        //     jQuery('.login-form').hide();
        //     jQuery('.register-form').show();
        // });
        //
        // jQuery('#register-back-btn').click(function () {
        //     jQuery('.login-form').show();
        //     jQuery('.register-form').hide();
        // });
    }

    return {
        //main function to initiate the module
        init: function () {

            handleLogin();
            handleForgetPassword();
            handleRegister();
            handleUpdateMessage();

        }
    };

}();

jQuery(document).ready(function() {
    Login.init();
});

