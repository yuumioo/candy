

export default function Contact(){
    const email = 'info@saraspraliner.se';
    const ins = 'SarasPraliner';
    const fb = 'Saras Praliner';
    const location = 'Håller till i Vega, Stockholm';

    const instagramUrl = `https://www.instagram.com/${ins.toLowerCase().replace(/\s+/g, '')}`; // Basic URL generation
    const facebookUrl = `https://www.facebook.com/${fb.replace(/\s+/g, '')}`; // Basic URL generation
  
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-md mx-auto font-sans">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b pb-3">
                KONTAKT
            </h2>


      <div className="space-y-4">
        {/* Email Address */}
        <div className="flex items-center space-x-3">
          {/* Icon (optional) - using emoji as placeholder */}
          <span className="text-xl text-pink-500">📧</span>
          {/* <Mail className="h-6 w-6 text-pink-500" /> */} {/* Example with lucide-react */}
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a
              href={`mailto:${email}`}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-center space-x-3">
          {/* Icon (optional) - using emoji as placeholder */}
          <span className="text-xl text-pink-500">📸</span>
          {/* <Instagram className="h-6 w-6 text-pink-500" /> */} {/* Example with lucide-react */}
          <div>
            <p className="text-sm text-gray-500">Instagram</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
            >
              {ins}
            </a>
          </div>
        </div>

        {/* Facebook */}
        <div className="flex items-center space-x-3">
          {/* Icon (optional) - using emoji as placeholder */}
          <span className="text-xl text-pink-500">📱</span>
          {/* <Facebook className="h-6 w-6 text-pink-500" /> */} {/* Example with lucide-react */}
          <div>
            <p className="text-sm text-gray-500">Facebook</p>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
            >
              {fb}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3 pt-2">
          {/* Icon (optional) - using emoji as placeholder */}
          <span className="text-xl text-pink-500">📍</span>
          {/* <MapPin className="h-6 w-6 text-pink-500" /> */} {/* Example with lucide-react */}
          <div>
            <p className="text-sm text-gray-500">Plats</p>
            <p className="text-gray-700">{location}</p>
          </div>
        </div>
      </div>

            
        </div>
    );
}