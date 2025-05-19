import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Users,
  MapPin,
  Briefcase,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Search,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// Define job types
interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: "Full-time" | "Part-time" | "Contract";
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

// Sample job listings
const jobListings: Job[] = [
  {
    id: "job-001",
    title: "Civil Engineer",
    location: "Delhi",
    department: "Engineering",
    type: "Full-time",
    postedDate: "2023-05-01",
    description:
      "We are looking for an experienced Civil Engineer to join our team to work on infrastructure projects across India.",
    responsibilities: [
      "Prepare, review and approve engineering drawings and specifications",
      "Coordinate with contractors, clients and government agencies",
      "Conduct site visits to monitor construction progress",
      "Ensure projects are completed according to specifications and standards",
      "Participate in project planning and resource allocation",
    ],
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "Minimum 3 years experience in infrastructure projects",
      "Knowledge of industry standards and building codes",
      "Proficiency in AutoCAD and other relevant software",
      "Excellent communication and problem-solving skills",
    ],
  },
  {
    id: "job-002",
    title: "Structural Engineer",
    location: "Mumbai",
    department: "Engineering",
    type: "Full-time",
    postedDate: "2023-05-10",
    description:
      "Join our innovative team of structural engineers working on cutting-edge tunnel and bridge projects.",
    responsibilities: [
      "Perform structural analysis and design calculations",
      "Create detailed structural drawings and specifications",
      "Review designs for compliance with codes and standards",
      "Collaborate with architects and other engineering disciplines",
      "Provide technical support during construction phases",
    ],
    requirements: [
      "Bachelor's or Master's degree in Structural Engineering",
      "Minimum 5 years of relevant experience",
      "Experience with structural analysis software",
      "Knowledge of international building codes and standards",
      "Strong analytical and problem-solving skills",
    ],
  },
  {
    id: "job-003",
    title: "Project Manager",
    location: "Bangalore",
    department: "Management",
    type: "Full-time",
    postedDate: "2023-05-15",
    description:
      "Looking for an experienced Project Manager to lead infrastructure development projects from conception to completion.",
    responsibilities: [
      "Lead project teams and manage project schedules and budgets",
      "Develop project plans and ensure timely execution",
      "Coordinate with clients, contractors, and stakeholders",
      "Manage project risks and implement mitigation strategies",
      "Report project progress to senior management",
    ],
    requirements: [
      "Bachelor's degree in Engineering or Construction Management",
      "PMP certification preferred",
      "Minimum 7 years of project management experience",
      "Strong leadership and communication skills",
      "Experience with project management software",
    ],
  },
  {
    id: "job-004",
    title: "CAD Technician",
    location: "Delhi",
    department: "Design",
    type: "Full-time",
    postedDate: "2023-05-20",
    description:
      "We are seeking a detail-oriented CAD Technician to create technical drawings for our engineering projects.",
    responsibilities: [
      "Create detailed 2D and 3D drawings using CAD software",
      "Convert sketches and specifications into detailed drawings",
      "Update and maintain drawing database",
      "Assist engineers with design modifications",
      "Ensure drawings meet company standards and specifications",
    ],
    requirements: [
      "Diploma or degree in relevant technical field",
      "Minimum 2 years experience with AutoCAD and other CAD software",
      "Knowledge of engineering drawings and standards",
      "Attention to detail and accuracy",
      "Ability to work in a team environment",
    ],
  },
  {
    id: "job-005",
    title: "Environmental Specialist",
    location: "Chennai",
    department: "Environmental",
    type: "Contract",
    postedDate: "2023-05-25",
    description:
      "Seeking an Environmental Specialist to ensure our projects comply with environmental regulations and promote sustainability.",
    responsibilities: [
      "Conduct environmental impact assessments",
      "Prepare environmental reports and documentation",
      "Ensure compliance with environmental regulations",
      "Develop and implement environmental management plans",
      "Liaise with environmental agencies and stakeholders",
    ],
    requirements: [
      "Bachelor's degree in Environmental Science or related field",
      "Minimum 3 years' experience in environmental consulting or compliance",
      "Knowledge of Indian environmental laws and regulations",
      "Experience with environmental impact assessments",
      "Strong report writing and communication skills",
    ],
  },
];

// Job details component
const JobDetails: React.FC<{ job: Job; onClose: () => void }> = ({
  job,
  onClose,
}) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-lg animate-fadeIn">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold">{job.title}</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" /> {job.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4 mr-1" /> {job.type}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-1" /> {job.department}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" /> Posted: {job.postedDate}
            </div>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Job Description</h4>
          <p className="text-muted-foreground">{job.description}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Requirements</h4>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <Button className="w-full sm:w-auto">
            Apply Now <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Job card component
const JobCard: React.FC<{
  job: Job;
  onClick: () => void;
  isExpanded: boolean;
}> = ({ job, onClick, isExpanded }) => {
  return (
    <div
      className={cn(
        "bg-card border rounded-lg p-5 transition-all duration-300 hover:shadow-md cursor-pointer",
        isExpanded ? "border-primary shadow-md" : "border-border",
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-heading font-bold text-xl">{job.title}</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" /> {job.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Briefcase className="w-4 h-4 mr-1" /> {job.type}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" /> Posted: {job.postedDate}
            </div>
          </div>
        </div>
        <div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </div>
      <p className="mt-3 text-muted-foreground line-clamp-2">
        {job.description}
      </p>
      <div className="mt-4 flex items-center text-primary font-medium">
        View Details <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
};

// Filter options
const locations = Array.from(new Set(jobListings.map((job) => job.location)));
const departments = Array.from(
  new Set(jobListings.map((job) => job.department)),
);
const jobTypes = Array.from(new Set(jobListings.map((job) => job.type)));

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    department: "",
    type: "",
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Filter jobs based on search term and filters
  const filteredJobs = jobListings.filter((job) => {
    // Search term filter
    const searchMatch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Dropdown filters
    const locationMatch =
      filters.location === "" || job.location === filters.location;
    const departmentMatch =
      filters.department === "" || job.department === filters.department;
    const typeMatch = filters.type === "" || job.type === filters.type;

    return searchMatch && locationMatch && departmentMatch && typeMatch;
  });

  // Handle job selection
  const handleJobClick = (job: Job) => {
    if (expandedJobId === job.id) {
      setExpandedJobId(null);
      setSelectedJob(null);
    } else {
      setExpandedJobId(job.id);
      setSelectedJob(job);
      // Smooth scroll to job details on mobile
      if (window.innerWidth < 768) {
        setTimeout(() => {
          document
            .getElementById("job-details")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setFilters({
      location: "",
      department: "",
      type: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Careers | Medallion India Private Limited</title>
        <meta
          name="description"
          content="Explore career opportunities at Medallion India Private Limited. Join our team of professionals and contribute to innovative infrastructure projects across India."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container px-4 mx-auto">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover career opportunities at Medallion India and be part of
              our mission to build innovative infrastructure solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <AnimatedSection animation="fade-up" className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-3xl">
              We're looking for talented individuals to join our team. Browse
              our current openings and find an opportunity that matches your
              skills and aspirations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-7 gap-6 lg:gap-10">
            {/* Filters - Left Sidebar (Desktop) / Top Section (Mobile) */}
            <div className="md:col-span-2">
              <AnimatedSection
                animation="fade-right"
                className="sticky top-24 bg-background p-5 rounded-lg border"
              >
                <h3 className="font-heading font-bold text-xl mb-4">
                  Search & Filter
                </h3>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search job titles..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Separator className="my-4" />

                {/* Location Filter */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <select
                    id="location"
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Department Filter */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="department"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    value={filters.department}
                    onChange={(e) =>
                      setFilters({ ...filters, department: e.target.value })
                    }
                  >
                    <option value="">All Departments</option>
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Job Type Filter */}
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="jobType"
                  >
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    value={filters.type}
                    onChange={(e) =>
                      setFilters({ ...filters, type: e.target.value })
                    }
                  >
                    <option value="">All Types</option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={resetFilters}
                >
                  Reset Filters
                </Button>
              </AnimatedSection>
            </div>

            {/* Jobs Listing and Details */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-1 gap-5">
                {filteredJobs.length > 0 ? (
                  <>
                    {/* Job Listings */}
                    <AnimatedSection animation="fade-up" className="space-y-5">
                      {filteredJobs.map((job) => (
                        <JobCard
                          key={job.id}
                          job={job}
                          onClick={() => handleJobClick(job)}
                          isExpanded={expandedJobId === job.id}
                        />
                      ))}
                    </AnimatedSection>

                    {/* Job Details (only show if a job is selected) */}
                    {selectedJob && (
                      <AnimatedSection
                        id="job-details"
                        animation="fade-in"
                        className="mt-6"
                      >
                        <JobDetails
                          job={selectedJob}
                          onClose={() => {
                            setSelectedJob(null);
                            setExpandedJobId(null);
                          }}
                        />
                      </AnimatedSection>
                    )}
                  </>
                ) : (
                  <div className="bg-card rounded-lg p-8 text-center">
                    <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any jobs matching your search criteria.
                    </p>
                    <Button variant="outline" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container px-4 mx-auto">
          <AnimatedSection
            animation="fade-up"
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Don't See the Right Position?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team.
              Send your resume to our HR department, and we'll keep it on file
              for future opportunities.
            </p>
            <Button size="lg">Send Speculative Application</Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
