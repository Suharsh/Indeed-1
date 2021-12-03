export const baseUrl = 'http://localhost:3003/';
export const urls = {
  register: 'indeed/user/UserRegistration',
  login: 'indeed/user/UserLogin',
  updateCompanyProfile: 'indeed/api/company',
  getCompaniesWithNameOrLocation: 'indeed/api/companiesList',
  getAllJobs: 'indeed/api/jobs',
  getSpecificJob: 'indeed/api/company',
  getSearchedJobs: 'indeed/api/jobs',
  // postReview: 'indeed/api/jobseeker',
  getReviews: 'indeed/api/jobseeker',
  saveJob: '',
  unsaveJob: '',
  reviewHelpful: 'indeed/api/reviews',
  reviewUnhelpful: 'indeed/api/reviews',
  getMyJobs: 'indeed/api/jobseeker/getAppliedJob',
  getMyReviews: 'indeed/api/jobseeker/reviews',
  postReview: 'indeed/api/jobseeker',
  uploadCompanyPhotos: 'indeed/api/uploadCompanyPhotos/{companyId}',
  imageUpload: 'indeed/files/upload/images',
  getCompanyDetailsByEmployerId:
    'indeed/api/companyDetails/forEmployer/{employerid}',
  getUserDetailsWithId: 'indeed/user/UserDetailsForId/{userId}',
  getCompanyDetailsByCompanyId: 'indeed/api/companyDetails/{companyId}',
  getImageFromS3: 'indeed/files/images/{key}',
  findSalaries: 'indeed/api/salaries/jobs',
};
