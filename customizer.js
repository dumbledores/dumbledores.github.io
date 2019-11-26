<script>
  
  // Initialize order fields 
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add new text field to order comments section at checkout
ec.order.extraFields.how_you_found_us = {
    'title': 'How did you find us?',
    'textPlaceholder': 'Describe here please!',
    'type': 'text',
    'required': false,
    'checkoutDisplaySection': 'payment_details', // show new field in order comments block
    'orderDetailsDisplaySection': 'order_comments' // show saved data in order comments block in order details to merchant and customer
};
  
  console.log("custom java script");
</script>
