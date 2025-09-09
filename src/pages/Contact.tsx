import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Users,
  Building2,
  Navigation
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Centre for Marine Living Resources and Ecology",
        "Ministry of Earth Sciences, Government of India",
        "Kochi, Kerala 682508, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: +91-484-2381740",
        "Alt: +91-484-2381750",
        "Fax: +91-484-2381739"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "General: info@cmlre.gov.in",
        "Director: director@cmlre.gov.in", 
        "Research: research@cmlre.gov.in"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:30 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      name: "Marine Ecology Division",
      head: "Dr. P. Kaladharan",
      email: "ecology@cmlre.gov.in",
      phone: "+91-484-2381741"
    },
    {
      name: "Fish Taxonomy Division", 
      head: "Dr. Grinson George",
      email: "taxonomy@cmlre.gov.in",
      phone: "+91-484-2381742"
    },
    {
      name: "Molecular Biology Division",
      head: "Dr. Sandhya Sukumaran",
      email: "molbio@cmlre.gov.in", 
      phone: "+91-484-2381743"
    },
    {
      name: "Data Platform Division",
      head: "Dr. K.S. Mohamed",
      email: "dataplatform@cmlre.gov.in",
      phone: "+91-484-2381744"
    }
  ];

  const quickContacts = [
    { type: "Data Access Support", email: "datasupport@cmlre.gov.in" },
    { type: "Research Collaboration", email: "collaboration@cmlre.gov.in" },
    { type: "Media Inquiries", email: "media@cmlre.gov.in" },
    { type: "Technical Support", email: "techsupport@cmlre.gov.in" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-ocean rounded-2xl shadow-glow">
                  <MessageSquare className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Contact
                <span className="block bg-gradient-ocean bg-clip-text text-transparent">
                  CMLRE
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get in touch with our marine research experts. We're here to support your research needs 
                and answer questions about our data platform and services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-ocean hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="p-3 bg-gradient-ocean rounded-lg w-fit mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Enter your organization" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="data-access">Data Access Request</SelectItem>
                          <SelectItem value="research-collab">Research Collaboration</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="media-inquiry">Media Inquiry</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe your inquiry in detail..."
                        rows={6}
                      />
                    </div>

                    <Button className="w-full bg-gradient-ocean hover:shadow-ocean transition-all duration-300">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contacts & Departments */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Department Contacts</h3>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <Card key={index} className="hover:shadow-ocean hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-ocean rounded-lg">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{dept.name}</CardTitle>
                              <CardDescription>Head: {dept.head}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-1 text-sm">
                            <p className="flex items-center gap-2">
                              <Mail className="h-3 w-3" />
                              {dept.email}
                            </p>
                            <p className="flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              {dept.phone}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Quick Contacts</h3>
                  <div className="space-y-3">
                    {quickContacts.map((contact, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg border hover:shadow-md transition-all duration-300">
                        <Mail className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{contact.type}</p>
                          <p className="text-xs text-muted-foreground">{contact.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Directions */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
              <p className="text-muted-foreground">
                Located in the heart of Kochi, Kerala's maritime hub
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map Placeholder */}
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">CMLRE Campus Location</p>
                </div>
              </div>

              {/* Directions */}
              <div>
                <h3 className="text-2xl font-bold mb-6">How to Reach Us</h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="h-5 w-5" />
                        By Air
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Cochin International Airport (COK) is 45 km away. 
                        Take a taxi or bus to reach CMLRE campus in Kochi.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Navigation className="h-5 w-5" />
                        By Train
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Ernakulam Junction (15 km) and Aluva Station (20 km) are the 
                        nearest railway stations with good connectivity.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        By Road
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Well connected by National Highway 66. Regular bus services 
                        available from major cities in Kerala and Karnataka.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions on Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;