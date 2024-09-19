export const loginValidatoin = (data: any) => {
    const errors = {
      email: "",
      password: "",
      message: "",
      status: true,
    };
  
    // Validate email
    if (!data.email) {
      errors.email = "इमेल आवश्यक छ";
      errors.status = false;
      errors.message = "कृपया सबै आवश्यक इनपुट फिल्डहरू भर्नुहोस्";
    } else if (typeof data.email !== "string") {
      errors.email = "गलत इमेल ढाँचा";
      errors.status = false;
      errors.message = "कृपया सबै आवश्यक इनपुट फिल्डहरू भर्नुहोस्";
    } else if (data.email.length < 3 || data.email.length > 50) {
      errors.email = "न्यूनतम ३ शब्द र अधिकतम ५० शब्दको बीचमा हुनुपर्छ";
      errors.status = false;
      errors.message = "कृपया सबै आवश्यक इनपुट फिल्डहरू भर्नुहोस्";
    }
  
    // Validate password
    if (!data.password) {
      errors.password = "पासवर्ड आवश्यक छ";
      errors.status = false;
      errors.message = "कृपया सबै आवश्यक इनपुट फिल्डहरू भर्नुहोस्";
    } else if (typeof data.password !== "string") {
      errors.password = "गलत पासवर्ड ढाँचा";
      errors.status = false;
      errors.message = "कृपया सबै आवश्यक इनपुट फिल्डहरू भर्नुहोस्";
    } else if (data.password.length < 5 || data.password.length > 50) {
      errors.password = "न्यूनतम ५ शब्द र अधिकतम ५० शब्दको बीचमा हुनुपर्छ";
      errors.status = false;
      errors.message = "कृपया सबै आवश्यक इनपुट फिल्डहरू भर्नुहोस्";
    }
    return { isValid: errors.status, errors };
  };