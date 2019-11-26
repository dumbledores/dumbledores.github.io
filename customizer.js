//Store - 20915081;
window.localStorage.setItem("show_ecwid_logs","true");

// Initialize extra fields
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'How should we sign the package?' to shipping address form
ec.order.extraFields.wrapping_box_signature = {
    'title': 'How should we sign the package?',
    'textPlaceholder': 'Package sign',
    'type': 'text',
    'tip': 'We will put a label on a box so the recipient knows who it is from',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

ec.refreshConfig();

<#list order.extraFields as extraField>
    <#if extraField.title?has_content && extraField.orderDisplaySection?has_content>
        ${extraField.title}: ${extraField.value}
    </#if>
</#list>
