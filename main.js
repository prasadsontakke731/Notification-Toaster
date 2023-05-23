const notifications = document.querySelector('.notifications');
const buttons = document.querySelectorAll('.buttons .btn');
const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
    text: 'Success:this is success toast',
  },
  error: {
    icon: 'fa-circle-xmark',
    text: 'Error:this is error toast',
  },
  warning: {
    icon: 'fa-triangle-exclamation',
    text: 'Warning:this is warning toast',
  },
  info: {
    icon: 'fa-circle-info',
    text: 'Info:this is info toast',
  },
};

const removeToast = (toast) => {
  toast.classList.add('hide');
  setTimeout(() => toast.remove(), 500);
};

const createToast = (id) => {
  // getting icon and text for the toast based on the id passed
  const { icon, text } = toastDetails[id];
  const toast = document.createElement('li'); // creating new element
  toast.className = `toast ${id}`; // setting class for toast

  // setting inner html for toast
  toast.innerHTML = ` <div class="column">
          <i class="fa-solid ${icon}"></i>
          <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark onclick="removeToast(this.parentElement)""></i>
     `;

  notifications.appendChild(toast); // append toast notification

  // setting timeout to remove toast after specified duration
  setTimeout(() => {
    removeToast(toast);
  }, toastDetails.timer);
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    createToast(btn.id);
  });
});
