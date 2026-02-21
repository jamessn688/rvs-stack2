const ComplianceFooter = () => {
  return (
    <footer className="py-10 px-5" style={{ backgroundColor: "hsl(220 40% 10%)" }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-primary-foreground/40 font-body leading-relaxed text-center">
          Results may vary. Not a guarantee of debt reduction. This is not a loan, debt consolidation, or bankruptcy. Program designed for credit card and unsecured debt. Not available in all states. Individual results depend on specific debt amounts, creditor policies, and completion of program terms. The testimonials on this page are illustrative examples based on typical client experiences and may not reflect your specific results. This website is an advertorial and not a news publication. Consult with a financial advisor before making any financial decisions.
        </p>
        <p className="text-sm text-primary-foreground/30 font-body text-center mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ComplianceFooter;
