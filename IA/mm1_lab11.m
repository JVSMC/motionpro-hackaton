clear all
close all
clc
%Importing the file
signalEGC
t = x(:,1);
s1 = x(:,2);

%Define the parameters
N = length(x);
dt = t(2)-t(1);
Fs = 1/dt;
Fmax = Fs/2;
T = t(end);
df = 1/T;

F = -Fmax:df:Fmax;
Xw = fftshift(fft(s1));
plot(F,abs(Xw.^2)) % Power Spectrum
figure
plot(F,abs(Xw)) % Current Spectrum

##% Define Low-pass filter (Ideal)
##fc = 40;
##H = zeros(N,1);
##for k = 1:N
##    if abs(F(k)) < fc
##      H(k) = 1;
##    endif
##end  

% Define n-th order Butterworth Low-pass filter
fc = 40;
no = 1;
H = zeros(N,1);
for k = 1:N
  H(k) = 1/sqrt(1+(F(k)/fc)^(2*no));
end  

%Apply the filter 
Xfilt = Xw.*H;
%Return to time
s1filt= ifft(ifftshift(Xfilt));
%Grapth the filter
figure
plot(t,s1,t,s1filt)

%Graph both signals in the same window
figure
subplot(2,1,1)
plot(t,s1)
subplot(2,1,2)
plot(t,s1filt)
