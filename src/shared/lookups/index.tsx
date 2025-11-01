const csSm = {
    cardcs:'bg-[#152122] border-[#7C69291A]',
    titleSize: 'text-sm pt-1',
    contentcs: 'px-6',
    badgeSize: 'text-xs',
    imageHeight: 'h-[120px] !object-fill',
    rateSize: 'text-xs',
    descSize: 'text-sm',
    amountCs: 'text-xs'
}

const countryOp = [
    { id: 1, name: 'Afghanistan' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'Andorra' },
    { id: 5, name: 'Angola' },
    { id: 6, name: 'Antigua and Barbuda' },
    { id: 7, name: 'Argentina' },
    { id: 8, name: 'Armenia' },
    { id: 9, name: 'Australia' },
    { id: 10, name: 'Austria' },
    { id: 11, name: 'Azerbaijan' },
    { id: 12, name: 'Bahamas' },
    { id: 13, name: 'Bahrain' },
    { id: 14, name: 'Bangladesh' },
    { id: 15, name: 'Barbados' },
    { id: 16, name: 'Belarus' },
    { id: 17, name: 'Belgium' },
    { id: 18, name: 'Belize' },
    { id: 19, name: 'Benin' },
    { id: 20, name: 'Bhutan' },
    { id: 21, name: 'Bolivia' },
    { id: 22, name: 'Bosnia and Herzegovina' },
    { id: 23, name: 'Botswana' },
    { id: 24, name: 'Brazil' },
    { id: 25, name: 'Brunei' },
    { id: 26, name: 'Bulgaria' },
    { id: 27, name: 'Burkina Faso' },
    { id: 28, name: 'Burundi' },
    { id: 29, name: 'Cabo Verde' },
    { id: 30, name: 'Cambodia' },
    { id: 31, name: 'Cameroon' },
    { id: 32, name: 'Canada' },
    { id: 33, name: 'Central African Republic' },
    { id: 34, name: 'Chad' },
    { id: 35, name: 'Chile' },
    { id: 36, name: 'China' },
    { id: 37, name: 'Colombia' },
    { id: 38, name: 'Comoros' },
    { id: 39, name: 'Congo (Congo-Brazzaville)' },
    { id: 40, name: 'Costa Rica' },
    { id: 41, name: 'Croatia' },
    { id: 42, name: 'Cuba' },
    { id: 43, name: 'Cyprus' },
    { id: 44, name: 'Czechia (Czech Republic)' },
    { id: 45, name: 'Denmark' },
    { id: 46, name: 'Djibouti' },
    { id: 47, name: 'Dominica' },
    { id: 48, name: 'Dominican Republic' },
    { id: 49, name: 'Ecuador' },
    { id: 50, name: 'Egypt' },
    { id: 51, name: 'El Salvador' },
    { id: 52, name: 'Equatorial Guinea' },
    { id: 53, name: 'Eritrea' },
    { id: 54, name: 'Estonia' },
    { id: 55, name: 'Eswatini (fmr. "Swaziland")' },
    { id: 56, name: 'Ethiopia' },
    { id: 57, name: 'Fiji' },
    { id: 58, name: 'Finland' },
    { id: 59, name: 'France' },
    { id: 60, name: 'Gabon' },
    { id: 61, name: 'Gambia' },
    { id: 62, name: 'Georgia' },
    { id: 63, name: 'Germany' },
    { id: 64, name: 'Ghana' },
    { id: 65, name: 'Greece' },
    { id: 66, name: 'Grenada' },
    { id: 67, name: 'Guatemala' },
    { id: 68, name: 'Guinea' },
    { id: 69, name: 'Guinea-Bissau' },
    { id: 70, name: 'Guyana' },
    { id: 71, name: 'Haiti' },
    { id: 72, name: 'Honduras' },
    { id: 73, name: 'Hungary' },
    { id: 74, name: 'Iceland' },
    { id: 75, name: 'India' },
    { id: 76, name: 'Indonesia' },
    { id: 77, name: 'Iran' },
    { id: 78, name: 'Iraq' },
    { id: 79, name: 'Ireland' },
    { id: 80, name: 'Israel' },
    { id: 81, name: 'Italy' },
    { id: 82, name: 'Jamaica' },
    { id: 83, name: 'Japan' },
    { id: 84, name: 'Jordan' },
    { id: 85, name: 'Kazakhstan' },
    { id: 86, name: 'Kenya' },
    { id: 87, name: 'Kiribati' },
    { id: 88, name: 'Korea, North' },
    { id: 89, name: 'Korea, South' },
    { id: 90, name: 'Kosovo' },
    { id: 91, name: 'Kuwait' },
    { id: 92, name: 'Kyrgyzstan' },
    { id: 93, name: 'Laos' },
    { id: 94, name: 'Latvia' },
    { id: 95, name: 'Lebanon' },
    { id: 96, name: 'Lesotho' },
    { id: 97, name: 'Liberia' },
    { id: 98, name: 'Libya' },
    { id: 99, name: 'Liechtenstein' },
    { id: 100, name: 'Lithuania' },
    { id: 101, name: 'Luxembourg' },
    { id: 102, name: 'Madagascar' },
    { id: 103, name: 'Malawi' },
    { id: 104, name: 'Malaysia' },
    { id: 105, name: 'Maldives' },
    { id: 106, name: 'Mali' },
    { id: 107, name: 'Malta' },
    { id: 108, name: 'Marshall Islands' },
    { id: 109, name: 'Mauritania' },
    { id: 110, name: 'Mauritius' },
    { id: 111, name: 'Mexico' },
    { id: 112, name: 'Micronesia' },
    { id: 113, name: 'Moldova' },
    { id: 114, name: 'Monaco' },
    { id: 115, name: 'Mongolia' },
    { id: 116, name: 'Montenegro' },
    { id: 117, name: 'Morocco' },
    { id: 118, name: 'Mozambique' },
    { id: 119, name: 'Myanmar (formerly Burma)' },
    { id: 120, name: 'Namibia' },
    { id: 121, name: 'Nauru' },
    { id: 122, name: 'Nepal' },
    { id: 123, name: 'Netherlands' },
    { id: 124, name: 'New Zealand' },
    { id: 125, name: 'Nicaragua' },
    { id: 126, name: 'Niger' },
    { id: 127, name: 'Nigeria' },
    { id: 128, name: 'North Macedonia' },
    { id: 129, name: 'Norway' },
    { id: 130, name: 'Oman' },
    { id: 131, name: 'Pakistan' },
    { id: 132, name: 'Palau' },
    { id: 133, name: 'Palestine State' },
    { id: 134, name: 'Panama' },
    { id: 135, name: 'Papua New Guinea' },
    { id: 136, name: 'Paraguay' },
    { id: 137, name: 'Peru' },
    { id: 138, name: 'Philippines' },
    { id: 139, name: 'Poland' },
    { id: 140, name: 'Portugal' },
    { id: 141, name: 'Qatar' },
    { id: 142, name: 'Romania' },
    { id: 143, name: 'Russia' },
    { id: 144, name: 'Rwanda' },
    { id: 145, name: 'Saint Kitts and Nevis' },
    { id: 146, name: 'Saint Lucia' },
    { id: 147, name: 'Saint Vincent and the Grenadines' },
    { id: 148, name: 'Samoa' },
    { id: 149, name: 'San Marino' },
    { id: 150, name: 'Sao Tome and Principe' },
    { id: 151, name: 'Saudi Arabia' },
    { id: 152, name: 'Senegal' },
    { id: 153, name: 'Serbia' },
    { id: 154, name: 'Seychelles' },
    { id: 155, name: 'Sierra Leone' },
    { id: 156, name: 'Singapore' },
    { id: 157, name: 'Slovakia' },
    { id: 158, name: 'Slovenia' },
    { id: 159, name: 'Solomon Islands' },
    { id: 160, name: 'Somalia' },
    { id: 161, name: 'South Africa' },
    { id: 162, name: 'South Sudan' },
    { id: 163, name: 'Spain' },
    { id: 164, name: 'Sri Lanka' },
    { id: 165, name: 'Sudan' },
    { id: 166, name: 'Suriname' },
    { id: 167, name: 'Sweden' },
    { id: 168, name: 'Switzerland' },
    { id: 169, name: 'Syria' },
    { id: 170, name: 'Taiwan' },
    { id: 171, name: 'Tajikistan' },
    { id: 172, name: 'Tanzania' },
    { id: 173, name: 'Thailand' },
    { id: 174, name: 'Timor-Leste' },
    { id: 175, name: 'Togo' },
    { id: 176, name: 'Tonga' },
    { id: 177, name: 'Trinidad and Tobago' },
    { id: 178, name: 'Tunisia' },
    { id: 179, name: 'Turkey' },
    { id: 180, name: 'Turkmenistan' },
    { id: 181, name: 'Tuvalu' },
    { id: 182, name: 'Uganda' },
    { id: 183, name: 'Ukraine' },
    { id: 184, name: 'United Arab Emirates' },
    { id: 185, name: 'United Kingdom' },
    { id: 186, name: 'United States of America' },
    { id: 187, name: 'Uruguay' },
    { id: 188, name: 'Uzbekistan' },
    { id: 189, name: 'Vanuatu' },
    { id: 190, name: 'Vatican City' },
    { id: 191, name: 'Venezuela' },
    { id: 192, name: 'Vietnam' },
    { id: 193, name: 'Yemen' },
    { id: 194, name: 'Zambia' },
    { id: 195, name: 'Zimbabwe' }
];

const stateOp = [
    {
        id: 1,
        name: 'NewYork'
    },
    {
        id: 2,
        name: 'Texas'
    }
]

const categories = [
    {
        id: 1,
        name: 'All Categories'
    },
    {
        id: 2,
        name: 'Vehicles'
    },
    {
        id: 3,
        name: 'Apparel'
    },
    {
        id: 4,
        name: 'Property'
    },
    {
        id: 5,
        name: 'Classified'
    },
    {
        id: 6,
        name: 'Electronics'
    },
    {
        id: 7,
        name: 'Entertainment'
    },
    {
        id: 8,
        name: 'Family'
    },
    {
        id: 9,
        name: 'Hobbies'
    },
    {
        id: 10,
        name: 'Garden & Outdoor'
    },
    {
        id: 11,
        name: 'Home Goods'
    },
    {
        id: 12,
        name: 'Home Improvement Supplies'
    },
    {
        id: 13,
        name: 'Musical Instruments'
    },
    {
        id: 14,
        name: 'Office Supplies'
    },
    {
        id: 15,
        name: 'Pet Supplies'
    },
    {
        id: 16,
        name: 'Support Goods'
    },
    {
        id: 17,
        name: 'Toys & Games'
    },
]

const categorytypeOp = [
    {
        id: 1,
        name: 'Smart Phone'
    },
    {
        id: 2,
        name: 'Headphone'
    },
    {
        id: 3,
        name: 'Mobile Accessories'
    },
    {
        id: 3,
        name: 'Gaming Console'
    },
]

export { countryOp, stateOp, categories, categorytypeOp, csSm }