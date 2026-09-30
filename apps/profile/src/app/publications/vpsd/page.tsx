'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import './vpsd.css';

// Data Array
const contents = [
  {
    id: 1,
    title: 'Connect to VPS',
    summary: 'Establishing a connection to your Virtual Private Server (VPS)',
    description: {
      'main-p1':
        'This is practically the first step in the deployment journey.',
      'main-p2':
        'Using SSH (Secure Shell) to connect to a VPS is the industry standard way for remote server administration. Unlike older protocols such as Telnet and unencrypted FTP, SSH encrypts the communication channel, protecting usernames, passwords, commands, and other data from network interception.',
      'main.image': '/ssh-vps.png',
      'main.image-alt': 'Ssh-Vps',
      points: [
        {
          description: 'Following are the steps to follow:',
          point: [
            {
              'pt-desc': 'Obtain the IP address (or domain name) of your VPS.',
            },
            {
              'pt-desc':
                'Obtain your username (usually root for a fresh server, or a custom user created during setup).',
            },
            {
              'pt-desc':
                'Use authentication method (either a password or an SSH private key file).',
            },
            {
              'pt-desc':
                "Run 'ssh -p <port> username@your_server_ip.' #Default is port 22",
            },
            {
              'pt-desc':
                'If using a password, type it in (characters will not show on the screen for security) and hit Enter',
              'pt-img': '/vps-info.png',
              'pt-img-alt': 'VPS Information',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
  {
    id: 2,
    title: 'Software Setup',
    summary: 'Setup Docker Engine & Nginx',
    description: {
      'main-p1':
        "Let's first run 'sudo apt update && sudo apt upgrade -y' to update the system's list of available softwares and upgrade all installed packages to their latest versions.",
      'main.image': '/Vps-Update-Upgrade.png',
      'main.image-alt': 'VPS Update Upgrade',
      points: [
        {
          description: 'Install following softwares:',
          point: [
            {
              'pt-desc':
                "'curl -fsSL https://get.docker.com -o get-docker.sh' - Downloads the official Docker installation script from the internet and saves it as a local file named get-docker.sh.",
            },
            {
              'pt-desc':
                "'sudo sh get-docker.sh' - Automatically installs the latest stable version of Docker Engine, CLI, and associated plugins on your VPS. Docker is an open-source software platform that packages applications and all their dependencies into isolated, lightweight environments called containers.",
              'pt-img': '/docker-install.png',
              'pt-img-label': 'Docker Installation',
              'pt-img-alt': 'Docker Installation',
            },
            {
              'pt-desc':
                "'sudo apt install nginx' - This installs Nginx. Nginx is a high-performance, open-source web server that also functions as a reverse proxy, load balancer, and HTTP cache. As a reverse proxy Nginx acts as an intermediary, receiving external client requests from the internet and routing them to the internal Next.js application container.",
              'pt-img': '/Nginx-installation.png',
              'pt-img-label': 'Nginx Installation',
              'pt-img-alt': 'Nginx Installation',
            },
            {
              'pt-desc':
                "'sudo systemctl enable nginx && sudo systemctl start nginx' - Enable and start Nginx.",
              'pt-img': '/Enable-start-Nginx.png',
              'pt-img-label': 'Enable & Start Nginx',
              'pt-img-alt': 'Enable & Start Nginx',
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
  {
    id: 3,
    title: 'Docker Pull & Run',
    summary: 'Pull docker image and run it',
    description: {
      'main-p1':
        "'sudo docker pull <image name>' - This downloads a specific container image from a remote registry to VPS.",
      'main-p2':
        "'sudo docker run -it -d --restart unless-stopped -p 127.0.0.1:3000:3000 --name <app-name> -e NODE_ENV=production <image name>' - This creates and starts a brand new, isolated container from a specific Docker image.",
      'main.image': '/Docker-run.png',
      'main.image-alt': 'Docker Run',
      points: [],
    },
    // status: 'Active',
  },
  {
    id: 4,
    title: 'Nginx Configuration',
    summary: 'Setup Nginx configuration for your site including HTTPS support',
    description: {
      'main-p1':
        "'sudo nano /etc/nginx/sites-available/<app-name>'  #Create a config file for your site.",
      'main.image': '/Nginx-config.png',
      'main.image-alt': 'Nginx Configuration',
      points: [
        {
          description: 'Enable the site and remove the default:',
          point: [
            {
              'pt-desc':
                "'sudo ln -s /etc/nginx/sites-available/<app-name> /etc/nginx/sites-enabled/' - This enables a website or application configuration in the NGINX by creating a symbolic link (symlink).",
            },
            {
              'pt-desc':
                "'sudo rm /etc/nginx/sites-enabled/default' - This disables the default Nginx website configuration by removing its symbolic link from the active configuration directory.",
            },
            {
              'pt-desc': "'sudo nginx -t' - Test configuration syntax.",
            },
            {
              'pt-desc':
                "'sudo systemctl reload nginx' - This applies your configuration changes live by instructing the Nginx to reload its configuration files without dropping active user connections.",
            },
          ],
        },
        {
          description: 'To establish secure communication with a website.',
          point: [
            {
              'pt-desc':
                "'sudo apt install certbot python3-certbot-nginx' - This installs Certbot and its Nginx plugin, which are automated tools used to generate, install, and automatically renew free SSL/TLS certificates from Let's Encrypt so your website can run securely over HTTPS.",
            },
            {
              'pt-desc':
                "'sudo certbot --nginx -d <domain.com> -d <www.domain.com>' - Certbot will auto-edit your Nginx config to add SSL and set up auto-renewal.",
            },
          ],
        },
      ],
    },
    // status: 'Active',
  },
];

export default function VPSDMasterDetailPage() {
  const [selectedItemId, setSelectedItemId] = useState<number>(contents[0].id);
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedItem = contents.find((item) => item.id === selectedItemId);

  const handleItemClick = (id: number) => {
    setSelectedItemId(id);

    // Smooth scroll to the details panel on mobile screens
    if (window.innerWidth < 768) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 50);
    }
  };

  interface PointItem {
    'pt-desc': string;
    'pt-img'?: string;
    'pt-img-alt'?: string;
    'pt-img-label'?: string;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl font-extrabold text-black-900 mb-8">
          Virtual Private Server (VPS) Deployment
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Master List Section */}
          <div className="w-full md:w-1/4 flex flex-col gap-3">
            {contents.map((item) => {
              const isActive = selectedItemId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/20 text-white'
                      : 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-black-800'
                  }`}
                >
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p
                    className={`text-sm mt-1 line-clamp-1 ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3" ref={detailRef}>
            {selectedItem ? (
              <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm sticky top-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-black-900">
                    {selectedItem.title}
                  </h2>
                  {/* <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider rounded-full">
                    {selectedItem.status}
                  </span> */}
                </div>
                <h3 className="text-slate-500 font-medium mb-6">
                  {selectedItem.summary}
                </h3>
                <div className="prose prose-slate max-w-none">
                  <p className="text-black-700 leading-relaxed text-lg list-[square] list-inside">
                    {selectedItem.description['main-p1']}
                  </p>

                  {selectedItem.description['main-p2'] && (
                    <p className="text-black-700 leading-relaxed text-lg list-[square] list-inside my-4">
                      {selectedItem.description['main-p2']}
                    </p>
                  )}
                  {selectedItem.description['main.image'] && (
                    <Image
                      src={selectedItem.description['main.image']}
                      alt={selectedItem.description['main.image-alt']}
                      width={800}
                      height={425}
                      className="vpsd-main-img"
                    />
                  )}
                </div>

                <div>
                  {selectedItem.description.points.map(
                    (pointGroup, groupIndex) => (
                      <React.Fragment key={`point-group-${groupIndex}`}>
                        {/* Render the main description for this group */}
                        {pointGroup.description && (
                          <h3 className="text-black-700  text-lg mt-6 mb-3">
                            {pointGroup.description}
                          </h3>
                        )}

                        {/* Iterate over the nested point array */}
                        {pointGroup.point.map((item: PointItem, itemIndex) => {
                          const pointText = item['pt-desc'];
                          const pointImage = item['pt-img'];
                          const pointImageAlt = item['pt-img-alt'];
                          const pointImageLabel = item['pt-img-label'];

                          return (
                            <React.Fragment
                              key={`point-item-${groupIndex}-${itemIndex}`}
                            >
                              {pointText && (
                                <ul className="list-[square] list-outside pl-5">
                                  <li className="text-black-700 leading-relaxed text-lg mb-2">
                                    {pointText}
                                  </li>
                                </ul>
                              )}

                              {pointImageLabel && (
                                <p className="underline text-xl">
                                  {pointImageLabel}
                                </p>
                              )}

                              {pointImage && (
                                <Image
                                  src={pointImage}
                                  alt={pointImageAlt || ''}
                                  width={800}
                                  height={425}
                                  className="vpsd-point-img my-4"
                                />
                              )}
                            </React.Fragment>
                          );
                        })}
                      </React.Fragment>
                    ),
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center h-full min-h-[400px]">
                <p className="text-slate-400 text-lg">
                  Select an item to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
