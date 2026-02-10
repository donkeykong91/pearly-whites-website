/**
 * Persistent call-to-action for recruiters to quickly start an email.
 */
const RecruiterCta = () => {
  return (
    <a
      href="mailto:evey.occ@gmail.com?subject=Interview%20Opportunity%20-%20Dental%20Hygienist"
      className="from-bossanova-700 to-bossanova-600 hover:to-bossanova-500 shadow-bossanova-600/40 hover:shadow-bossanova-600/55 fixed right-3 bottom-3 left-3 z-50 inline-flex items-center justify-center rounded-xl bg-gradient-to-r px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:right-6 sm:bottom-6 sm:left-auto sm:rounded-full sm:px-5 sm:text-base"
    >
      Email for Interview
    </a>
  );
};

export default RecruiterCta;
